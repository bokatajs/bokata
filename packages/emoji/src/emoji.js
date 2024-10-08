const { stringToArray } = require('@bokata/core');

const nonSpacingRegex = new RegExp(String.fromCharCode(65039), 'g');
const emojiByName = require('./emoji.json');

const strip = (x) => x.replace(nonSpacingRegex, '');

const keys = Object.keys(emojiByName);
const emojiByCode = {};
for (let i = 0; i < keys.length; i += 1) {
  const current = keys[i];
  emojiByCode[strip(emojiByName[current])] = current;
}

const which = (code) => {
  const word = emojiByCode[strip(code)];
  return word ? `:${word}:` : code;
};

const removeEmojis = (str) =>
  str
    ? stringToArray(str)
        .map((word) => which(word))
        .join('')
    : str;

module.exports = { removeEmojis };
