const axios = require('axios');

async function request(options) {
  if (typeof options === 'string') {
    options = {
      url: options,
    };
  }
  if (!options.method) {
    options.method = 'get';
  }
  const result = await axios(options);
  if (!result) {
    return undefined;
  }
  return result.data;
}

module.exports = request;
