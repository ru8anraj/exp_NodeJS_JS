const http = require("http2")
    , server = http.createServer();

server.listen(8282, (err, res) => {
  if (err) {
    console.log('err in starting server - > ', err);
  } else {
    console.log('server started in 8282');
  }
});
