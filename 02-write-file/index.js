const fs = require('fs');
const path = require('path');
const { stdin, stdout, exit } = process;

const myWriteStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));

stdout.write('Write your text here:');

stdin.on('data', data => {
  if (data.toString().trim() == 'exit') {
    stdout.write('This is the end!\n');
    exit();
  }
  // writeToFile(data); // 1 вариант
  myWriteStream.write(data); // 2 вариант
  // при проверке выберите один плиз
});
process.on('exit', () => stdout.write('Удачи в изучении Node.js!'));
process.on('SIGINT', process.exit);
// const writeToFile = text => {
//   fs.appendFile(path.join(__dirname, 'text.txt'), text, err => {
//     if (err) {
//       throw err;
//     }
//     console.log(`File contains: ${text}`);
//   });
// };
