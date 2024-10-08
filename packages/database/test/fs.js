const fs = require('fs');

function readFile(fileName) {
  return new Promise((resolve) => {
    try {
      const data = fs.readFileSync(fileName, 'utf8');
      resolve(data);
    } catch (err) {
      resolve(undefined);
    }
  });
}

function writeFile(fileName, data, format = 'utf8') {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, format, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      }
    });
  });
}

function existsSync(fileName) {
  return fs.existsSync(fileName);
}

function lstatSync(fileName) {
  return fs.lstatSync(fileName);
}

function readFileSync(fileName, encoding = 'utf8') {
  return fs.readFileSync(fileName, encoding);
}

function unlinkSync(fileName) {
  return fs.unlinkSync(fileName);
}

module.exports = {
  readFile,
  writeFile,
  existsSync,
  lstatSync,
  readFileSync,
  unlinkSync,
  name: 'fs',
};
