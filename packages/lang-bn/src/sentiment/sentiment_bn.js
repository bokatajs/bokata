const afinn = require('./afinn_bn.json');
const negations = require('./negations_bn.json');

module.exports = {
  afinn,
  pattern: undefined,
  senticon: undefined,
  negations,
  stemmed: true,
};
