'use strict';

var net = require('net');
var socket = net.createServer();

socket.listen(4343, function (err, res) {
    if (err) {
        console.log('error in starting server - > ', err);
    } else {
        console.log('server started in 4343');
    }
});

socket.on();