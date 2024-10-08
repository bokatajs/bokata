class BotLocalization {
  constructor() {
    this.localizations = {};
  }

  addLocalization(locale, srckey, value) {
    const key = srckey.toLowerCase();
    if (!this.localizations[key]) {
      this.localizations[key] = {};
    }
    this.localizations[key][locale] = value;
  }

  getLocalized(locale, srckey) {
    const key = srckey.toLowerCase();
    if (!this.localizations[key]) {
      return srckey;
    }
    return this.localizations[key][locale] || this.localizations[key][this.fallbackLocale] || srckey;
  }

  removeLocale(locale) {
    const keys = Object.keys(this.localizations);
    for (let i = 0; i < keys.length; i += 1) {
      delete this.localizations[keys[i]][locale];
    }
  }

  removeKey(key) {
    delete this.localizations[key];
  }

  addRule(rule) {
    if (Array.isArray(rule)) {
      for (let i = 0; i < rule.length; i += 1) {
        this.addRule(rule[i]);
      }
    } else {
      this.masterLocale = rule.masterLocale || 'en';
      this.fallbackLocale = rule.fallbackLocale || this.masterLocale;
      let key;
      for (let i = 0; i < rule.rules.length; i += 1) {
        const current = rule.rules[i].trim();
        const index = current.indexOf(' ');
        const locale = current.slice(0, index).trim();
        const sentence = current.slice(index).trim();
        if (locale === this.masterLocale) {
          key = sentence;
        }
        this.addLocalization(locale, key, sentence);
      }
    }
  }
}

module.exports = BotLocalization;
