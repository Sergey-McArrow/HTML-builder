const path = require('path');
const fs = require('fs');
const myReadStream = fs.createReadStream(
  path.join(__dirname, 'text.txt'),
  'utf8'
);

myReadStream.on('data', text => console.log(text));

// fs.readFile(path.join(__dirname, 'text.txt'), 'utf8', (err, text) => {
//   if (err) throw err;
//   console.log(text);
// });
