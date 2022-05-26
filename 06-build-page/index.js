const fs = require('fs');
const path = require('path');
const fsPromises = require('fs/promises');

const source = path.join(__dirname, 'assets');
const dist = path.join(__dirname, 'project-dist');
const styleFolder = path.join(__dirname, 'styles');
const html = path.join(__dirname, 'template.html');
const myReadStreamOnHtml = fs.createReadStream(html);
const myWriteStreamOnHtml = fs.createWriteStream(
  path.join(__dirname, 'project-dist/index.html')
);

const htlmCreator = async () => {};

const errorHandler = async err => {
  console.log(err);
  return;
};

const makeDirAsync = async dir => {
  return new Promise((resolve, reject) => {
    fs.mkdir(path.join(dir), { recursive: true }, err => {
      if (err) return reject(err.message);
    });
    resolve();
  });
};

fsPromises.fs
  .then(() => {})
  .catch(err => {
    if (err) errorHandler(err);
  });
