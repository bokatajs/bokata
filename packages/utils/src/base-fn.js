function tokenize(text, tokenizer) {
  if (tokenizer) {
    if (tokenizer.tokenize) {
      return tokenizer.tokenize(text);
    }
    return tokenizer(text);
  }
  return text.split(/[\s,.!?;:([\]'"¡¿)/]+/).filter((x) => x);
}

function normalize(text, normalizer) {
  if (normalizer) {
    if (normalizer.normalize) {
      return normalizer.normalize(text);
    }
    return normalizer(text);
  }
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function wordPunctTokenize(text) {
  return text.split(/([A-zÀ-ÿ-]+|[0-9._]+|.|!|\?|'|"|:|;|,|-)/i).filter((x) => x.trim());
}

function lowerNormalize(text) {
  return text.toLowerCase();
}

module.exports = {
  tokenize,
  normalize,
  wordPunctTokenize,
  lowerNormalize,
};
