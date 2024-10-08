const { MarkovChain } = require('../src');

const input =
  'Sistemas que piensan como humanos.- Estos sistemas tratan de emular el pensamiento humano; por ejemplo las redes neuronales artificiales. La automatización de actividades que vinculamos con procesos de pensamiento humano, actividades como la toma de decisiones, resolución de problemas y aprendizaje. Sistemas que actúan como humanos.- Estos sistemas tratan de actuar como humanos; es decir, imitan el comportamiento humano; por ejemplo la robótica. El estudio de cómo lograr que los computadores realicen tareas que, por el momento, los humanos hacen mejor.';

describe('Markov Chain', () => {
  describe('PredictNext', () => {
    it('Should predict best words', () => {
      const chain = new MarkovChain({ text: input });
      const actual = chain.predictNext('sistemas que');
      const expected = ['piensan', 'actúan', 'vinculamos', 'los', ','];
      expect(actual).toEqual(expected);
    });
  });

  describe('randomSentence', () => {
    it('Should generate a random sentnce', () => {
      const chain = new MarkovChain({ text: input });
      const actual = chain.randomSentence('de');
      expect(actual.length).toBeGreaterThan(2);
    });
  });
});
