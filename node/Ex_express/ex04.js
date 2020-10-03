const express = require('express');
const server = express();

server.route('/clients')
    .get((req, res) => { res.send("<h1>Client List!!</h1>") })
    .post((req, res) => { res.send('<h1>New Client!</h1>') })
    .put((req, res) => { res.send("<h1>Change Client!!</h1>") })
    .delete((req, res) => { res.send("<h1>Remove Client!</h1>") })

const port = 3333;

server.listen(port, () => { console.log('Server is running on port: ' + port) });