const leven = require('./leven');
const similarity = require('./similarity');
const CosineSimilarity = require('./cosine-similarity');
const SpellCheck = require('./spell-check');

module.exports = {
  leven,
  CosineSimilarity,
  similarity,
  SpellCheck,
};
