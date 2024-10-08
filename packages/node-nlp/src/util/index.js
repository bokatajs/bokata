const { removeEmojis } = require('@bokata/emoji');
const { Evaluator } = require('@bokata/evaluator');
const { SpellCheck } = require('./spell-check');
const { Handlebars } = require('./handlebars');

module.exports = {
  removeEmojis,
  Evaluator,
  SpellCheck,
  Handlebars,
};
