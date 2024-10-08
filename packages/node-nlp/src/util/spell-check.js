const { SpellCheck: SpellCheckBase } = require('@bokata/similarity');

class SpellCheck extends SpellCheckBase {
  constructor(settings = {}) {
    super(settings.features ? settings : { features: settings });
  }
}

module.exports = {
  SpellCheck,
};
