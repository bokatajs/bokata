const leven = require('./leven');

function similarity(str1, str2, normalize = false) {
  if (normalize) {
    /* eslint-disable */
    str1 = str1
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    str2 = str2
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    /* eslint-enable */
  }
  return str1 === str2 ? 0 : leven(str1, str2);
}

module.exports = similarity;
