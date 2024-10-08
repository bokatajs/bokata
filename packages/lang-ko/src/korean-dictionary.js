const dict = require('./dict.json');
const namesDict = require('./names-dict.json');
const { conjugate } = require('./korean-conjugation');

const dictionary = {};
const names = {};
let initialized = false;

function build() {
  const keys = Object.keys(dict);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    const words = dict[key];
    for (let j = 0; j < words.length; j += 1) {
      dictionary[words[j]] = { type: key };
      if (key === 'Verb') {
        const conjugations = Object.keys(conjugate(words[j], false));
        for (let k = 0; k < conjugations.length; k += 1) {
          if (conjugations[k] !== words[j]) {
            dictionary[conjugations[k]] = { type: key, root: words[j] };
          }
        }
      }
    }
  }
}

function buildNames() {
  const keys = Object.keys(namesDict);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    names[key] = {};
    const words = namesDict[key];
    for (let j = 0; j < words.length; j += 1) {
      names[key][words[j]] = 1;
    }
  }
}

function initDicts() {
  if (!initialized) {
    build();
    buildNames();
    initialized = true;
  }
}

module.exports = {
  initDicts,
  dictionary,
  names,
};
