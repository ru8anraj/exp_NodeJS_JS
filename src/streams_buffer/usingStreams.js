const fs = require('fs');

var readableStream = fs.createReadStream(__dirname + '/data.txt', { encoding: 'utf8' });
var writableStream = fs.createWriteStream(__dirname + '/data2.txt', { encoding: 'utf8' });

readableStream.on('data', (dataChunks) => {
  console.log('data received in chunks - > ');
})

// piping the read and write
readableStream.pipe(writableStream);
