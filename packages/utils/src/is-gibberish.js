function normalize(text) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function getMeasures(tokens) {
  const freqs = {
    length: 0,
    words: tokens.length,
    vowels: 0,
    consonants: 0,
    uniqueChars: 0,
  };
  const vowels = { a: 1, e: 1, i: 1, o: 1, u: 1, y: 1 };
  const chars = {};
  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i];
    freqs.length += token.length;
    for (let j = 0; j < token.length; j += 1) {
      if (vowels[token[j]]) {
        freqs.vowels += 1;
      } else {
        freqs.consonants += 1;
      }
      chars[token[j]] = 1;
    }
  }
  freqs.uniqueChars = Object.keys(chars).length;
  freqs.vowelFreq = freqs.vowels / freqs.length;
  freqs.consonantFreq = freqs.consonants / freqs.length;
  freqs.uniqueFreq = freqs.uniqueChars / freqs.length;
  freqs.wordCharFreq = freqs.words / freqs.length;
  freqs.vowelOverConsonant = freqs.consonants > 0 ? freqs.vowels / freqs.consonants : 0;
  return freqs;
}

function getDeviation(value, lower, upper) {
  if (value < lower) {
    const logDelta = Math.log(lower - value);
    if (logDelta === 0) {
      return 1;
    }
    return Math.log(Math.abs(lower)) / logDelta;
  }
  if (value > upper) {
    const logDelta = Math.abs(Math.log(value - upper));
    if (logDelta === 0) {
      return 1;
    }
    const max = upper > 1 ? 1.5 : 1;
    return Math.log(Math.abs(max)) / logDelta;
  }
  return 0;
}

function gibberishScore(text) {
  if (text.length < 6) {
    return 0;
  }
  const tokens = normalize(text.slice(0, 32))
    .split(/[\s,.!?;:([\]'"¡¿)/]+/)
    .filter((x) => x);
  const measures = getMeasures(tokens);
  console.log(measures);
  const deviations = {
    vowel: getDeviation(measures.vowelFreq, 0.35, 0.7),
    unique: getDeviation(measures.uniqueFreq, 0.5, 0.9),
    wordChar: getDeviation(measures.wordCharFreq, 0.15, 0.4),
  };
  return Math.min(1, deviations.unique + deviations.vowel + deviations.wordChar);
}

function isGibberish(text) {
  return gibberishScore(text) > 0.5;
}

module.exports = {
  gibberishScore,
  isGibberish,
};
