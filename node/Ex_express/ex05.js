const express = require('express');
const server = express();
const router = require('./ex05_routes');

server.use('/api', router);


const port = 3333;
server.listen(port, () => { console.log('Server is running on port: ' + port) });