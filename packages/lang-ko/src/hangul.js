const hangulBase = 44032;
const onsetBase = 588;
const vowelBase = 28;

const onsetMap = {
  ㄱ: 0,
  ㄲ: 1,
  ㄴ: 2,
  ㄷ: 3,
  ㄸ: 4,
  ㄹ: 5,
  ㅁ: 6,
  ㅂ: 7,
  ㅃ: 8,
  ㅅ: 9,
  ㅆ: 10,
  ㅇ: 11,
  ㅈ: 12,
  ㅉ: 13,
  ㅊ: 14,
  ㅋ: 15,
  ㅌ: 16,
  ㅍ: 17,
  ㅎ: 18,
};

const onsets = Object.keys(onsetMap);

const vowelMap = {
  ㅏ: 0,
  ㅐ: 1,
  ㅑ: 2,
  ㅒ: 3,
  ㅓ: 4,
  ㅔ: 5,
  ㅕ: 6,
  ㅖ: 7,
  ㅗ: 8,
  ㅘ: 9,
  ㅙ: 10,
  ㅚ: 11,
  ㅛ: 12,
  ㅜ: 13,
  ㅝ: 14,
  ㅞ: 15,
  ㅟ: 16,
  ㅠ: 17,
  ㅡ: 18,
  ㅢ: 19,
  ㅣ: 20,
};

const vowels = Object.keys(vowelMap);

const codaMap = {
  ' ': 0,
  ㄱ: 1,
  ㄲ: 2,
  ㄳ: 3,
  ㄴ: 4,
  ㄵ: 5,
  ㄶ: 6,
  ㄷ: 7,
  ㄹ: 8,
  ㄺ: 9,
  ㄻ: 10,
  ㄼ: 11,
  ㄽ: 12,
  ㄾ: 13,
  ㄿ: 14,
  ㅀ: 15,
  ㅁ: 16,
  ㅂ: 17,
  ㅄ: 18,
  ㅅ: 19,
  ㅆ: 20,
  ㅇ: 21,
  ㅈ: 22,
  ㅊ: 23,
  ㅋ: 24,
  ㅌ: 25,
  ㅍ: 26,
  ㅎ: 27,
};

const codas = Object.keys(codaMap);

function decomposeHangul(c) {
  const u = c.charCodeAt(0) - hangulBase;
  return {
    onset: onsets[Math.floor(u / onsetBase)],
    vowel: vowels[Math.floor((u % onsetBase) / vowelBase)],
    coda: codas[u % vowelBase],
  };
}

function hasCoda(c) {
  if (!c) {
    return false;
  }
  return (c.charCodeAt(0) - hangulBase) % vowelBase > 0;
}

function composeHangul(onset, vowel, coda = ' ') {
  return String.fromCharCode(hangulBase + onsetMap[onset] * onsetBase + vowelMap[vowel] * vowelBase + codaMap[coda]);
}

module.exports = {
  decomposeHangul,
  hasCoda,
  composeHangul,
  codaMap,
};
