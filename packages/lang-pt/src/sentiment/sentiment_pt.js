const afinn = require('./afinn_pt.json');
const negations = require('./negations_pt.json');

module.exports = {
  afinn,
  pattern: undefined,
  senticon: undefined,
  negations,
  stemmed: true,
};
