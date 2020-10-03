const express = require('express');
const server = express();

server.get('/', (req, res) => {
    res.send('<h1>Index!</h1>');
});

server.all('/teste', (req, res) => {
    res.send('<h1>TESTEE!</h1>')
});

server.get(/api/, (req, res) => {
    res.send('<h1>API detected!! <| </h1>');
});

const port = 3333;

server.listen(port, () => { console.log('Server is running') });