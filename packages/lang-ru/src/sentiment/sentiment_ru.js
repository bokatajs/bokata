const afinn = require('./afinn_ru.json');
const negations = require('./negations_ru.json');

module.exports = {
  afinn,
  pattern: undefined,
  senticon: undefined,
  negations,
  stemmed: true,
};
