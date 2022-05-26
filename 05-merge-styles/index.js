const fs = require('fs');
const path = require('path');

const myWriteStream = fs.createWriteStream(
  path.join(__dirname, 'project-dist', 'bundle.css')
);

fs.readdir(
  path.join(__dirname, 'styles'),
  { withFileTypes: true },
  (err, files) => {
    if (err) console.log(err);
    else {
      files.forEach(file => {
        if (file.name.endsWith('css')) {
          fs.readFile(
            path.join(__dirname, 'styles', file.name),
            'utf-8',
            (err, data) => {
              if (err) console.log(err);
              myWriteStream.write(data + '\n');
            }
          );
        }
      });
    }
  }
);
