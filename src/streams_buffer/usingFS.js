var fs = require('fs');

var buf = new Buffer('hello','utf-8');
console.log(buf);
var readFileSync = fs.readFileSync(__dirname + '/data.txt', 'utf8');
console.log('sync read - > ');

fs.readFile(__dirname + '/data.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('error in reading data - > ', err);
  } else {
    console.log('async read - > ');
  }
});
