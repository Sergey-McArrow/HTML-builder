const fs = require('fs');
const path = require('path');
const filesDir = path.join(__dirname, 'files/');
const filesCopyDir = path.join(__dirname, 'files-copy/');

fs.mkdir(filesCopyDir, { recursive: true }, err => {
  if (err) console.log(err);
});
fs.readdir(filesDir, { withFileTypes: true }, (err, files) => {
  if (err) throw err;
  else {
    files.forEach(file => {
      if (file.isFile()) {
        fs.copyFile(
          path.join(filesDir, file.name),
          path.join(filesCopyDir, file.name),
          err => {
            if (err) console.log(err);
          }
        );
      }
    });
  }
});
