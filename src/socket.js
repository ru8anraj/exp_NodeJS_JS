const net = require('net');
const socket = net.createServer();

socket.listen(4343, (err, res) => {
    if (err) {
        console.log('error in starting server - > ', err);
    } else {
        console.log('server started in 4343');
    }
});

socket.on()
