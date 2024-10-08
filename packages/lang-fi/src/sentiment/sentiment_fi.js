const afinn = require('./afinn_fi.json');
const negations = require('./negations_fi.json');

module.exports = {
  afinn,
  pattern: undefined,
  senticon: undefined,
  negations,
  stemmed: true,
};
