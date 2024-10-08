const { Clonable } = require('../../src');

class Cloned extends Clonable {
  constructor(settings) {
    super(settings);
    this.nick = 'nick';
    this.jsonExport = {
      keys: false,
      values: this.exportValues,
      surname: 'familyname',
      nick: {},
    };
    this.jsonImport = {
      keys: false,
      values: this.importValues,
      familyname: 'surname',
      nick: {},
    };
  }

  exportValues(target, source, key, value) {
    return this.objToValues(value, this.keys);
  }

  importValues(target, source, key, value) {
    return this.valuesToObj(value, this.keys);
  }

  writeValues(target, source, key, value) {
    const tgt = target;
    tgt.values = this.objToValues(value, this.keys);
  }

  readValues(target, source, key, value) {
    const tgt = target;
    tgt.values = this.valuesToObj(value, this.keys);
  }
}

module.exports = Cloned;
