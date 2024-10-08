const { Stopwords } = require('@bokata/core');

class StopwordsFa extends Stopwords {
  constructor(container, words) {
    super(container);
    this.name = 'stopwords-fa';
    this.dictionary = {};
    const list = words || [
      'از',
      'با',
      'یه',
      'برای',
      'و',
      'باید',
      'شاید',
      '؟',
      '!',
      '٪',
      '.',
      '،',
      '؛',
      ':',
      ';',
      ',',
      '۱',
      '۲',
      '۳',
      '۴',
      '۵',
      '۶',
      '۷',
      '۸',
      '۹',
      '۰',
    ];
    this.build(list);
  }
}

module.exports = StopwordsFa;
