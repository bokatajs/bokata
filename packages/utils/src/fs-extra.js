const path = require('path');

function getAbsolutePath(pathToCheck, rootDir = process.cwd()) {
  if (!pathToCheck) {
    return rootDir;
  }
  return path.isAbsolute(pathToCheck) ? pathToCheck : path.join(rootDir, pathToCheck);
}

module.exports = {
  getAbsolutePath,
};
