const { NeuralNetwork } = require('@bokata/neural');
const Nlu = require('./nlu');

class NeuralNlu extends Nlu {
  async innerTrain(srcInput) {
    const input = srcInput;
    this.neuralNetwork = new NeuralNetwork(input.settings, this.container);
    input.status = await this.neuralNetwork.train(input.corpus);
    return input;
  }

  innerProcess(srcInput) {
    const input = srcInput;
    input.classifications = this.neuralNetwork ? this.neuralNetwork.run(input.tokens) || { None: 1 } : { None: 1 };
    this.convertToArray(input);
    const { intent } = input.classifications[0];
    if (input.settings && input.settings.returnExplanation && intent && this.neuralNetwork && intent !== 'None') {
      input.explanation = this.neuralNetwork.explain(input.tokens, intent);
    }
    return input;
  }

  registerDefault() {
    super.registerDefault();
    this.container.register('NeuralNlu', NeuralNlu, false);
  }

  toJSON() {
    const result = super.toJSON();
    result.neuralNetwork = this.neuralNetwork ? this.neuralNetwork.toJSON() : undefined;
    return result;
  }

  fromJSON(json) {
    super.fromJSON(json);
    if (json.neuralNetwork) {
      this.neuralNetwork = new NeuralNetwork();
      this.neuralNetwork.fromJSON(json.neuralNetwork);
    }
  }
}

module.exports = NeuralNlu;
