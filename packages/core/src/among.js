/**
 * Class for an Among of a Stemmer
 */
class Among {
  constructor(s, sub, result, method, instance) {
    this.s_size = s.length;
    this.s = s;
    this.substring_i = sub;
    this.result = result;
    this.method = method;
    this.instance = instance;
  }
}

module.exports = Among;
