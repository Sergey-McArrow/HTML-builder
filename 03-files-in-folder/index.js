const fs = require('fs');
const { extname } = require('path');
const path = require('path');
// console.log(fs.readdir(__dirname), error => console.log(error));

fs.readdir(path.join('03-files-in-folder', 'secret-folder'), (err, files) => {
  if (err) console.log(err);
  else {
    files.forEach(file => {
      console.log(file.split('.'), extname(file));
    });
  }
});
