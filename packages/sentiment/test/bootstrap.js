const { containerBootstrap } = require('@bokata/core');

const container = containerBootstrap();
container.registerPipeline(
  'nlu-??-prepare',
  ['normalize', 'tokenize', 'removeStopwords', 'stem', 'arrToObj', 'output.tokens'],
  false
);
container.register('sentiment-en', {
  afinn: { hate: -1, love: 1, cat: 0.5, cute: 1 },
  negations: { words: ['not'] },
});

module.exports = container;
