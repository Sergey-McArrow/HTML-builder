const fs = require('fs');
const path = require('path');
fs.readdir(
  path.join(__dirname, 'secret-folder'),
  { withFileTypes: true },
  (err, files) => {
    if (err) console.log(err);
    else {
      files.forEach(file => {
        if (file.isFile()) {
          fs.stat(
            path.join(__dirname, 'secret-folder', file.name),
            (err, stat) => {
              if (err) console.log(err);
              console.log(
                file.name.split('.')[0] +
                  '         ' +
                  file.name.split('.')[1] +
                  '         ' +
                  stat.size
              );
            }
          );
        }
      });
    }
  }
);
