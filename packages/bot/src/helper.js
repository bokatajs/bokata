// a number or an string are not json objects
const isJsonObject = (content) => {
  try {
    if (typeof content !== 'object' && typeof JSON.parse(content) !== 'object') {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
};

const tryParseJson = (candidate, fallback = {}) => {
  try {
    return JSON.parse(candidate);
  } catch (error) {
    return fallback;
  }
};

const trimInput = (input = '') =>
  input.replace(/\t/g, ' ').replace(/^( )*/, '').replace(/( )*$/, '').replace(/ +/g, ' ');

const getValidationMessage = (validation) => {
  let message = validation.message || 'Invalid value';
  if (Array.isArray(message)) {
    const minIndex = Math.min(validation.currentRetry, message.length) - 1;

    message = message[minIndex];
  }
  return message;
};

module.exports = {
  isJsonObject,
  tryParseJson,
  trimInput,
  getValidationMessage,
};
