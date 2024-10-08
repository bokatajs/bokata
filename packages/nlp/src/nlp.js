const { Clonable, containerBootstrap } = require('@bokata/core');
const { NluManager, NluNeural } = require('@bokata/nlu');
const { Ner, ExtractorEnum, ExtractorRegex, ExtractorTrim, ExtractorBuiltin } = require('@bokata/ner');
const { ActionManager, NlgManager } = require('@bokata/nlg');
const { SentimentAnalyzer } = require('@bokata/sentiment');
const { SlotManager } = require('@bokata/slot');
const ContextManager = require('./context-manager');

class Nlp extends Clonable {
  constructor(settings = {}, container = undefined) {
    super(
      {
        settings: {},
        container: settings.container || container || containerBootstrap(),
      },
      container
    );
    this.applySettings(this.settings, settings);
    if (!this.settings.tag) {
      this.settings.tag = `nlp`;
    }
    this.registerDefault();
    this.applySettings(this.settings, this.container.getConfiguration(this.settings.tag));
    this.nluManager = this.container.get('nlu-manager', this.settings.nlu);
    this.ner = this.container.get('ner', this.settings.ner);
    this.nlgManager = this.container.get('nlg-manager', this.settings.nlg);
    this.actionManager = this.container.get('action-manager', this.settings.action);
    this.sentiment = this.container.get('sentiment-analyzer', this.settings.sentiment);
    this.slotManager = this.container.get('SlotManager', this.settings.slot);
    this.contextManager = this.container.get('context-manager', this.settings.context);
    this.forceNER = this.settings.forceNER;
    if (this.forceNER === undefined) {
      this.forceNER = false;
    }
    this.initialize();
  }

  registerDefault() {
    this.container.registerConfiguration(
      'nlp',
      {
        threshold: 0.5,
        autoLoad: true,
        autoSave: true,
        modelFileName: 'model.nlp',
        executeActionsBeforeAnswers: false,
      },
      false
    );
    this.use(NluManager);
    this.use(Ner);
    this.use(ExtractorEnum);
    this.use(ExtractorRegex);
    this.use(ExtractorTrim);
    this.use(ExtractorBuiltin);
    this.use(NlgManager);
    this.use(ActionManager);
    this.use(NluNeural);
    this.use(SentimentAnalyzer);
    this.use(ContextManager);
    this.container.register('SlotManager', SlotManager, false);
  }

  initialize() {
    if (this.settings.nlu) {
      const locales = Object.keys(this.settings.nlu);
      for (let i = 0; i < locales.length; i += 1) {
        const locale = locales[i];
        const domains = Object.keys(this.settings.nlu[locale]);
        for (let j = 0; j < domains.length; j += 1) {
          const domain = domains[j];
          const settings = this.settings.nlu[locale][domain];
          const { className } = settings;
          delete settings.className;
          this.useNlu(className, locale, domain, settings);
        }
      }
    }
    if (this.settings.languages) {
      this.addLanguage(this.settings.languages);
    }
    if (this.settings.locales) {
      this.addLanguage(this.settings.locales);
    }
    if (this.settings.calculateSentiment === undefined) {
      this.settings.calculateSentiment = true;
    }
    if (this.settings.executeActionsBeforeAnswers === undefined) {
      this.settings.executeActionsBeforeAnswers = false;
    }
  }

  async start() {
    if (this.settings.corpora) {
      await this.addCorpora(this.settings.corpora);
    }
  }

  async loadOrTrain() {
    let loaded = false;
    if (this.settings.autoLoad) {
      loaded = await this.load(this.settings.modelFileName);
    }
    if (!loaded) {
      await this.train();
    }
  }

  useNlu(clazz, locale, domain, settings) {
    if (!locale) {
      locale = '??';
    }
    if (Array.isArray(locale)) {
      for (let i = 0; i < locale.length; i += 1) {
        this.useNlu(clazz, locale[i], domain, settings);
      }
    } else {
      const className = typeof clazz === 'string' ? clazz : this.container.use(clazz);
      let config = this.container.getConfiguration(`domain-manager-${locale}`);
      if (!config) {
        config = {};
        this.container.registerConfiguration(`domain-manager-${locale}`, config);
      }
      if (!config.nluByDomain) {
        config.nluByDomain = {};
      }
      const domainName = !domain || domain === '*' ? 'default' : domain;
      if (!config.nluByDomain[domainName]) {
        config.nluByDomain[domainName] = {};
      }
      config.nluByDomain[domainName].className = className;
      config.nluByDomain[domainName].settings = settings;
    }
  }

  guessLanguage(input) {
    return this.nluManager.guessLanguage(input);
  }

  addLanguage(locales) {
    return this.nluManager.addLanguage(locales);
  }

  removeLanguage(locales) {
    return this.nluManager.removeLanguage(locales);
  }

  addAdditionalEnumEntityUtterances() {
    if (!this.settings.languages) {
      return;
    }
    this.settings.languages.forEach((locale) => {
      const replaceTexts = {};
      const rules = this.ner.getRules(locale);
      rules.forEach((rule) => {
        if (rule.type === 'enum') {
          const entityName = this.ner.nameToEntity(rule.name);
          replaceTexts[entityName] = replaceTexts[entityName] || [];
          rule.rules.forEach((value) => {
            replaceTexts[entityName] = replaceTexts[entityName].concat(value.texts);
          });
        }
      });
      const manager = this.nluManager.consolidateManager(locale);
      const sentences = manager.getSentences();
      sentences.forEach((sentence) => {
        const entities = this.ner
          .getEntitiesFromUtterance(locale, sentence.utterance)
          .map((entityName) => this.ner.nameToEntity(entityName));
        this.replaceEnumEntitiesInSentence(
          manager,
          locale,
          sentence.domain,
          sentence.utterance,
          sentence.intent,
          entities,
          replaceTexts
        );
      });
    });
  }

  replaceEnumEntitiesInSentence(manager, locale, domain, utterance, intent, entityList, replaceTexts) {
    if (!entityList.length) {
      this.nluManager.guesser.addExtraSentence(locale, utterance);
      manager.add(domain, utterance, intent);
      return;
    }
    const entityName = entityList[0];
    if (replaceTexts[entityName] && replaceTexts[entityName].length) {
      replaceTexts[entityName].forEach((replaceText) => {
        const entityUtterance = utterance.replace(entityName, replaceText);
        this.replaceEnumEntitiesInSentence(
          manager,
          locale,
          domain,
          entityUtterance,
          intent,
          entityList.slice(1),
          replaceTexts
        );
      });
    } else {
      this.replaceEnumEntitiesInSentence(manager, locale, domain, utterance, intent, entityList.slice(1), replaceTexts);
    }
  }

  addDocument(locale, utterance, intent) {
    const entities = this.ner.getEntitiesFromUtterance(utterance);
    this.slotManager.addBatch(intent, entities);
    return this.nluManager.add(locale, utterance, intent);
  }

  removeDocument(locale, utterance, intent) {
    return this.nluManager.remove(locale, utterance, intent);
  }

  getRulesByName(locale, name) {
    return this.ner.getRulesByName(locale, name);
  }

  addNerRule(locale, name, type, rule) {
    return this.ner.addRule(locale, name, type, rule);
  }

  removeNerRule(locale, name, rule) {
    return this.ner.removeRule(locale, name, rule);
  }

  addNerRuleOptionTexts(locale, name, option, texts) {
    return this.ner.addRuleOptionTexts(locale, name, option, texts);
  }

  removeNerRuleOptionTexts(locale, name, option, texts) {
    return this.ner.removeRuleOptionTexts(locale, name, option, texts);
  }

  addNerRegexRule(locale, name, regex) {
    return this.ner.addRegexRule(locale, name, regex);
  }

  addNerBetweenCondition(locale, name, left, right, opts) {
    return this.ner.addBetweenCondition(locale, name, left, right, opts);
  }

  addNerBetweenLastCondition(locale, name, left, right, opts) {
    return this.ner.addBetweenLastCondition(locale, name, left, right, opts);
  }

  addNerPositionCondition(locale, name, position, words, opts) {
    return this.ner.addPositionCondition(locale, name, position, words, opts);
  }

  addNerAfterCondition(locale, name, words, opts) {
    return this.ner.addAfterCondition(locale, name, words, opts);
  }

  addNerAfterFirstCondition(locale, name, words, opts) {
    return this.ner.addAfterFirstCondition(locale, name, words, opts);
  }

  addNerAfterLastCondition(locale, name, words, opts) {
    return this.ner.addAfterLastCondition(locale, name, words, opts);
  }

  addNerBeforeCondition(locale, name, words, opts) {
    return this.ner.addBeforeCondition(locale, name, words, opts);
  }

  addNerBeforeFirstCondition(locale, name, words, opts) {
    return this.ner.addBeforeFirstCondition(locale, name, words, opts);
  }

  addNerBeforeLastCondition(locale, name, words, opts) {
    return this.ner.addBeforeLastCondition(locale, name, words, opts);
  }

  assignDomain(locale, intent, domain) {
    return this.nluManager.assignDomain(locale, intent, domain);
  }

  getIntentDomain(locale, intent) {
    return this.nluManager.getIntentDomain(locale, intent);
  }

  getDomains() {
    return this.nluManager.getDomains();
  }

  addAction(intent, action, parameters, fn) {
    return this.actionManager.addAction(intent, action, parameters, fn);
  }

  registerActionFunction(action, fn) {
    return this.actionManager.registerActionInMap(action, fn);
  }

  getActions(intent) {
    return this.actionManager.findActions(intent);
  }

  removeAction(intent, action, parameters) {
    return this.actionManager.removeAction(intent, action, parameters);
  }

  removeActions(intent) {
    return this.actionManager.removeActions(intent);
  }

  removeActionFunction(action) {
    return this.actionManager.removeActionFromMap(action);
  }

  addAnswer(locale, intent, answer, opts) {
    return this.nlgManager.add(locale, intent, answer, opts);
  }

  removeAnswer(locale, intent, answer, opts) {
    return this.nlgManager.remove(locale, intent, answer, opts);
  }

  findAllAnswers(locale, intent) {
    const response = this.nlgManager.findAllAnswers({ locale, intent });
    return response.answers;
  }

  async addCorpora(names) {
    if (names) {
      if (Array.isArray(names)) {
        for (let i = 0; i < names.length; i += 1) {
          await this.addCorpus(names[i]);
        }
      } else {
        await this.addCorpus(names);
      }
    }
  }

  async addImported(input) {
    let content;
    if (input.content) {
      content = input.content;
    } else if (input.filename) {
      const fs = this.container.get('fs');
      content = await fs.readFile(input.filename);
      if (!content) {
        throw new Error(`Corpus not found "${input.filename}"`);
      }
    } else {
      throw new Error('Corpus information without content or file name');
    }
    let importer = this.container.get(input.importer);
    if (!importer) {
      importer = this.container.get(`${input.importer}-importer`);
    }
    if (!importer) {
      throw new Error(`Corpus importer not found: ${input.importer}`);
    }
    const corpora = importer.transform(content, input);
    for (let i = 0; i < corpora.length; i += 1) {
      this.addCorpus(corpora[i]);
    }
  }

  addEntities(entities, locale) {
    const keys = Object.keys(entities);
    for (let i = 0; i < keys.length; i += 1) {
      const entityName = keys[i];
      let entity = entities[entityName];
      if (typeof entity === 'string') {
        entity = { regex: [entity] };
      }
      let finalLocale = entity.locale;
      if (!finalLocale) {
        finalLocale = locale || 'en';
      }
      if (typeof finalLocale === 'string') {
        finalLocale = finalLocale.slice(0, 2);
      }
      if (entity.options) {
        const optionNames = Object.keys(entity.options);
        for (let j = 0; j < optionNames.length; j += 1) {
          this.addNerRuleOptionTexts(finalLocale, entityName, optionNames[j], entity.options[optionNames[j]]);
        }
      }
      if (entity.regex) {
        if (Array.isArray(entity.regex)) {
          for (let j = 0; j < entity.regex.length; j += 1) {
            this.addNerRegexRule(finalLocale, entityName, entity.regex[j]);
          }
        } else if (typeof entity.regex === 'string' && entity.regex.trim()) {
          this.addNerRegexRule(finalLocale, entityName, entity.regex);
        }
      }
      if (entity.trim) {
        for (let j = 0; j < entity.trim.length; j += 1) {
          switch (entity.trim[j].position) {
            case 'after':
            case 'afterLast':
            case 'afterFirst':
            case 'before':
            case 'beforeFirst':
            case 'beforeLast':
              this.addNerPositionCondition(
                finalLocale,
                entityName,
                entity.trim[j].position,
                entity.trim[j].words,
                entity.trim[j].opts
              );
              break;
            case 'between':
              this.addNerBetweenCondition(
                finalLocale,
                entityName,
                entity.trim[j].leftWords,
                entity.trim[j].rightWords,
                entity.trim[j].opts
              );
              break;
            case 'betweenLast':
              this.addNerBetweenLastCondition(
                finalLocale,
                entityName,
                entity.trim[j].leftWords,
                entity.trim[j].rightWords,
                entity.trim[j].opts
              );
              break;
            default:
              break;
          }
        }
      }
    }
  }

  addData(data, locale, domain) {
    for (let i = 0; i < data.length; i += 1) {
      const current = data[i];
      const { intent, utterances, answers, slotFilling, actions } = current;
      for (let j = 0; j < utterances.length; j += 1) {
        if (domain) {
          this.assignDomain(locale, intent, domain.name);
        }
        this.addDocument(locale, utterances[j], intent);
      }
      if (answers) {
        for (let j = 0; j < answers.length; j += 1) {
          const answer = answers[j];
          if (typeof answer === 'string') {
            this.addAnswer(locale, intent, answer);
          } else {
            this.addAnswer(locale, intent, answer.answer, answer.opts);
          }
        }
      }
      if (slotFilling) {
        const entities = Object.keys(slotFilling);
        for (let j = 0; j < entities.length; j += 1) {
          const slot = slotFilling[entities[j]];
          let mandatory;
          const slotQuestions = {};
          if (typeof slot === 'string') {
            slotQuestions[locale] = slot;
            mandatory = true;
          } else {
            slotQuestions[locale] = slot.question;
            mandatory = slot.mandatory || false;
          }
          this.slotManager.updateSlot(intent, entities[j], mandatory, slotQuestions);
        }
      }
      if (actions) {
        actions.forEach((action) => {
          if (!action) return;
          if (typeof action === 'object') {
            if (!action.name) return;
            this.addAction(intent, action.name, action.parameters || []);
          } else {
            this.addAction(intent, action, []);
          }
        });
      }
    }
  }

  async addCorpus(fileName) {
    if (fileName.importer) {
      await this.addImported(fileName);
    } else {
      let corpus = fileName;
      const fs = this.container.get('fs');
      if (typeof fileName === 'string') {
        const fileData = await fs.readFile(fileName);
        if (!fileData) {
          throw new Error(`Corpus not found "${fileName}"`);
        }
        corpus = typeof fileData === 'string' ? JSON.parse(fileData) : fileData;
      }
      if (corpus.contextData) {
        let { contextData } = corpus;
        if (typeof corpus.contextData === 'string') {
          contextData = JSON.parse(await fs.readFile(corpus.contextData));
        }
        const contextManager = this.container.get('context-manager');
        const keys = Object.keys(contextData);
        for (let i = 0; i < keys.length; i += 1) {
          contextManager.defaultData[keys[i]] = contextData[keys[i]];
        }
      }
      if (corpus.domains) {
        if (corpus.entities) {
          this.addEntities(corpus.entities);
        }
        for (let i = 0; i < corpus.domains.length; i += 1) {
          const domain = corpus.domains[i];
          const { data, entities } = domain;
          const locale = domain.locale.slice(0, 2);
          this.addLanguage(locale);
          if (entities) {
            this.addEntities(entities, locale);
          }
          this.addData(data, locale, domain);
        }
      } else {
        const locale = corpus.locale.slice(0, 2);
        this.addLanguage(locale);
        const { data, entities } = corpus;
        if (entities) {
          this.addEntities(entities, locale);
        }
        this.addData(data, locale);
      }
    }
  }

  getSentiment(locale, utterance) {
    if (typeof locale === 'object') {
      return this.sentiment.process(locale);
    }
    if (!utterance) {
      utterance = locale;
      locale = this.guessLanguage(utterance);
    }
    return this.sentiment.process({ utterance, locale });
  }

  describeLanguage(locale, name) {
    this.nluManager.describeLanguage(locale, name);
  }

  async train() {
    this.nluManager.addLanguage(this.settings.languages);
    const result = await this.nluManager.train();
    if (this.settings.autoSave) {
      await this.save(this.settings.modelFileName, true);
    }
    return result;
  }

  async classify(locale, utterance, settings) {
    return this.nluManager.process(locale, utterance, settings || this.settings.nlu);
  }

  async extractEntities(locale, utterance, context, settings) {
    if (typeof locale === 'object') {
      return this.ner.process(locale);
    }
    if (!utterance) {
      utterance = locale;
      locale = undefined;
    }
    if (!locale) {
      locale = this.guessLanguage(utterance);
    }
    const output = await this.ner.process({
      locale,
      utterance,
      context,
      settings: this.applySettings(settings, this.settings.ner),
    });
    return output;
  }

  organizeEntities(entities) {
    const dict = {};
    for (let i = 0; i < entities.length; i += 1) {
      const entity = entities[i];
      if (!dict[entity.entity]) {
        dict[entity.entity] = [];
      }
      dict[entity.entity].push(entity);
    }
    const result = [];
    Object.keys(dict).forEach((key) => {
      const arr = dict[key];
      if (arr.length === 1) {
        result.push(arr[0]);
      } else {
        for (let i = 0; i < arr.length; i += 1) {
          arr[i].alias = `${key}_${i}`;
        }
        result.push({
          entity: key,
          isList: true,
          items: arr,
        });
      }
    });
    return result;
  }

  structureEntities(output) {
    const organizedEntities = this.organizeEntities(output.entities);
    if (!output.context.entities) {
      output.context.entities = {};
    }
    for (let i = 0; i < organizedEntities.length; i += 1) {
      const entity = organizedEntities[i];
      output.context.entities[entity.entity] = entity;
      if (entity.alias) {
        output.context[entity.alias] = entity.sourceText;
      }
      if (entity.isList) {
        for (let j = 0; j < entity.items.length; j += 1) {
          output.context[entity.items[j].alias] = entity.items[j].sourceText;
        }
      } else {
        // assume that there could be more than one entity with the same name
        output.context[`${entity.entity}_0`] = entity.sourceText;
      }
      output.context[entity.entity] = entity.isList ? entity.items[0].sourceText : entity.sourceText;
    }
    return output;
  }

  async process(locale, utterance, srcContext, settings) {
    let sourceInput;
    let context = srcContext;
    if (typeof locale === 'object') {
      if (typeof utterance === 'object' && utterance.value) {
        locale = undefined;
        utterance = utterance.value;
      } else {
        sourceInput = locale;
      }
    }
    if (!sourceInput) {
      if (!utterance) {
        utterance = locale;
        locale = undefined;
      }
      if (!locale) {
        locale = this.guessLanguage(utterance);
      }
      sourceInput = {
        locale,
        utterance,
        settings,
      };
      if (settings) {
        if (settings.activity && !sourceInput.activity) {
          sourceInput.activity = settings.activity;
        }
        if (settings.conversationId && !sourceInput.activity) {
          sourceInput.activity = {
            conversation: {
              id: settings.conversationId,
            },
          };
        }
      }
    } else {
      locale = sourceInput.locale;
      utterance = sourceInput.utterance || sourceInput.message || sourceInput.text;
    }
    if (!context) {
      context = await this.contextManager.getContext(sourceInput);
    }
    context.channel = sourceInput.channel;
    context.app = sourceInput.app;
    context.from = sourceInput.from || null;
    const input = {
      locale,
      utterance,
      context,
      settings: this.applySettings(settings, this.settings.nlu),
    };
    const forceNER = input.settings && 'forceNER' in input.settings ? input.settings.forceNER : this.forceNER;
    let output = await this.nluManager.process(input);
    if (forceNER || !this.slotManager.isEmpty) {
      const optionalUtterance = await this.ner.generateEntityUtterance(output.locale || locale, utterance);
      if (optionalUtterance && optionalUtterance !== utterance) {
        const optionalInput = {
          locale: output.locale || locale,
          utterance: optionalUtterance,
          context,
          settings: this.applySettings(settings, this.settings.nlu),
        };
        const optionalOutput = await this.nluManager.process(optionalInput);
        if (optionalOutput && (optionalOutput.score > output.score || output.intent === 'None')) {
          output = optionalOutput;
          output.utterance = utterance;
          output.optionalUtterance = optionalUtterance;
        }
      }
    }
    if (output.score < this.settings.threshold) {
      output.score = 1;
      output.intent = 'None';
    }
    output.context = context;
    if (forceNER || !this.slotManager.isEmpty) {
      const intentEntities = this.slotManager.getIntentEntityNames(output.intent);
      output = await this.ner.process({ ...output }, intentEntities);
    } else {
      output.entities = [];
      output.sourceEntities = [];
    }
    const stemmer = this.container.get(`stemmer-${output.locale}`);
    if (stemmer && stemmer.lastFill) {
      stemmer.lastFill(output);
    }
    output = this.structureEntities(output);
    if (forceNER || !this.slotManager.isEmpty) {
      if (this.slotManager.process(output, context)) {
        // structure entities again because slots may have added
        output = this.structureEntities(output);
      }
      context.slotFill = output.slotFill;
    }
    if (this.settings.executeActionsBeforeAnswers) {
      output = await this.actionManager.run({ ...output });
    }
    if (this.settings.executeActionsBeforeAnswers && output.answer) {
      // Render answer from actions and use as final answer
      output.answer = this.nlgManager.renderText(output.answer, context);
    } else {
      const answers = await this.nlgManager.run({ ...output });
      output.answers = answers.answers;
      output.answer = answers.answer;
    }
    if (output.srcAnswer) {
      // Re-Render Answer to also replace newly added entities in srcAnswer
      output.answer = this.nlgManager.renderText(output.srcAnswer, context);
    }
    if (!this.settings.executeActionsBeforeAnswers) {
      output = await this.actionManager.run({ ...output });
    }
    if (this.settings.calculateSentiment) {
      const sentiment = await this.getSentiment(locale, utterance);
      output.sentiment = sentiment ? sentiment.sentiment : undefined;
    }
    await this.contextManager.setContext(sourceInput, context);
    delete output.context;
    delete output.settings;
    const result = sourceInput ? this.applySettings(sourceInput, output) : output;
    if (result.intent === 'None' && !result.answer) {
      const openQuestion = this.container.get('open-question');
      if (openQuestion) {
        const qnaAnswer = await openQuestion.getAnswer(result.locale, result.utterance);
        if (qnaAnswer && qnaAnswer.answer && qnaAnswer.answer.length > 0) {
          result.answer = qnaAnswer.answer;
          result.isOpenQuestionAnswer = true;
          result.openQuestionFirstCharacter = qnaAnswer.position;
          result.openQuestionScore = qnaAnswer.score;
        }
      }
    }
    if (this.onIntent) {
      await this.onIntent(this, result);
    } else {
      const eventName = `onIntent(${result.intent})`;
      const pipeline = this.container.getPipeline(eventName);
      if (pipeline) {
        await this.container.runPipeline(pipeline, result, this);
      }
    }
    return result;
  }

  toJSON() {
    const result = {
      settings: { ...this.settings },
      nluManager: this.nluManager.toJSON(),
      ner: this.ner.toJSON(),
      nlgManager: this.nlgManager.toJSON(),
      actionManager: this.actionManager.toJSON(),
      slotManager: this.slotManager.save(),
    };
    delete result.settings.container;

    return result;
  }

  fromJSON(json) {
    this.applySettings(this.settings, json.settings);
    this.nluManager.fromJSON(json.nluManager);
    this.ner.fromJSON(json.ner);
    this.nlgManager.fromJSON(json.nlgManager);
    this.actionManager.fromJSON(json.actionManager);
    this.slotManager.load(json.slotManager);
  }

  export(minified = false) {
    const clone = this.toJSON();
    return minified ? JSON.stringify(clone) : JSON.stringify(clone, null, 2);
  }

  import(data) {
    const clone = typeof data === 'string' ? JSON.parse(data) : data;
    this.fromJSON(clone);
  }

  async save(srcFileName, minified = false) {
    const fs = this.container.get('fs');
    const fileName = srcFileName || 'model.nlp';
    await fs.writeFile(fileName, this.export(minified));
  }

  async load(srcFileName) {
    const fs = this.container.get('fs');
    const fileName = srcFileName || 'model.nlp';
    const data = await fs.readFile(fileName);
    if (data) {
      this.import(data);
      return true;
    }
    return false;
  }
}

module.exports = Nlp;
