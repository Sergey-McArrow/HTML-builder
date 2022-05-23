const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;
stdin.on('data', data => {
  if (data === '.exit') {
    stdin.exit(1);
  }
  writeToFile(data);
});
process.on('exit', () => stdout.write('Удачи в изучении Node.js!'));

const writeToFile = text => {
  fs.appendFile(path.join(__dirname, 'text.txt'), text, err => {
    if (err) {
      throw err;
    }
    console.log(`File contains: ${text}`);
  });
};

// const fs = require('fs');
// const path = require('path');
// const readline = require('readline');
// const process = require('process');
// const { stdin: input, stdout: output } = require('process');
// const rl = readline.createInterface({ input, output });

// const readStream = () => {
//   rl.question('input some text', text => {
//     if (text != '.exit') {
//       writeToFile(text);
//       //   readStream();
//     }
//     rl.close();
//   });
// };

// const writeToFile = text => {
//   fs.appendFile(path.join(__dirname, 'text.txt'), text, err => {
//     if (err) {
//       throw err;
//     }
//     console.log(`File created and contains: ${text}`);
//   });
// };

// const stream = fs.createReadStream('source.txt', 'utf-8');
// stream.on('data', readStream());
// process.on('beforeExit', error => {
//   if (error) {
//     throw error;
//   }
//   readStream();
// });

// const input = fs.createReadStream(readStream());
// const output = fs.createWriteStream(path.join(__dirname, 'text.txt'));
// // let data = '';
// input.on('data', chunk => writeToFile(chunk));
// input.on('end', () => console.log('End'));
// input.on('error', error => console.log('Error', error.message));

// readStream();
