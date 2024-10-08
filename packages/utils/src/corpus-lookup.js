const Lookup = require('./lookup');

class CorpusLookup {
  constructor(corpus, stemmer, generateVectors = true) {
    if (corpus && stemmer) {
      this.build(corpus, stemmer, generateVectors);
    }
  }

  buildLookups() {
    this.inputLookup = new Lookup(this.trainData, 'input');
    this.outputLookup = new Lookup(this.trainData, 'output');
    this.numInputs = this.inputLookup.items.length;
    this.numOutputs = this.outputLookup.items.length;
  }

  toVector(item) {
    return {
      input: this.inputLookup.toVector(item.input),
      output: this.outputLookup.toVector(item.output),
    };
  }

  buildVectors() {
    this.trainVectors = this.trainData.map((x) => this.toVector(x));
  }

  buildObjects() {
    this.trainObjects = [];
    for (let i = 0; i < this.trainData.length; i += 1) {
      const current = this.trainData[i];
      const currentInput = this.inputLookup.toObj(current.input);
      const obj = {
        input: {
          keys: Object.keys(currentInput),
          data: currentInput,
        },
        output: this.outputLookup.toObj(current.output),
      };
      this.trainObjects.push(obj);
    }
  }

  arrToObj(arr) {
    return arr.reduce((p, c) => {
      p[c] = 1;
      return p;
    }, {});
  }

  prepareInput(input) {
    return this.arrToObj(this.stemmer.tokenizeAndStem(input));
  }

  inputToVector(input) {
    return this.inputLookup.toVector(this.prepareInput(input));
  }

  inputToObj(input) {
    const obj = this.inputLookup.toObj(this.prepareInput(input));
    return {
      keys: Object.keys(obj),
      data: obj,
    };
  }

  objToClassifications(obj) {
    const result = [];
    Object.keys(obj).forEach((key) => {
      result.push({ intent: key, score: obj[key] });
    });
    return result.sort((a, b) => b.score - a.score);
  }

  vectorToClassifications(vector) {
    const obj = this.outputLookup.vectorToObj(vector);
    const result = [];
    Object.keys(obj).forEach((key) => {
      result.push({ intent: key, score: obj[key] });
    });
    return result.sort((a, b) => b.score - a.score);
  }

  build(corpus, stemmer, generateVectors) {
    this.corpus = corpus;
    this.stemmer = stemmer;
    this.generateVectors = generateVectors;
    const data = Array.isArray(corpus) ? corpus : corpus.data;
    this.trainData = [];
    data.forEach((item) => {
      item.utterances.forEach((utterance) => {
        this.trainData.push({
          input: this.prepareInput(utterance),
          output: this.arrToObj([item.intent]),
        });
      });
    });
    this.buildLookups();
    if (this.generateVectors) {
      this.buildVectors();
    } else {
      this.buildObjects();
    }
  }
}

module.exports = CorpusLookup;
