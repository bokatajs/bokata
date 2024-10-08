let response;
let numCalls = 0;

function setResponse(res) {
  response = res;
}

function request() {
  numCalls += 1;
  return Promise.resolve(response);
}

function resetNumCalls() {
  numCalls = 0;
}

function getNumCalls() {
  return numCalls;
}

module.exports = {
  setResponse,
  request,
  resetNumCalls,
  getNumCalls,
};
