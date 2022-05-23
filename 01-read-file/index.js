const path = require('path');
const fs = require('fs');
fs.readFile(path.join(__dirname, 'text.txt'), 'utf8', (err, text) => {
  if (err) throw err;
  console.log(text);
});
console.log();
