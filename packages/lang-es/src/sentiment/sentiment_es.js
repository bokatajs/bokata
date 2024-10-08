const afinn = require('./afinn_es.json');
const senticon = require('./senticon_es.json');
const negations = require('./negations_es.json');

module.exports = {
  afinn,
  pattern: undefined,
  senticon,
  negations,
  stemmed: true,
};
