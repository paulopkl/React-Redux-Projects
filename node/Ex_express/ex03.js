const express = require('express');
const server = express();

server.get('/api', (req, res, next) => {
    console.log('Inicio...');
    next();
    console.log('Fim...');
});

server.get('/api', (req, res) => {
    console.log('Resposta...');
    res.send('<h1>Olá Express</h1>');
});

const port = 3333;

server.listen(port, () => { console.log('Server is running on port: ' + port) });