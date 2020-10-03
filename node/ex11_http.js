const http = require('http');

const server = http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end('<h1>Bla bla bla bla express ??? não??!!!</h1>');
});

server.addListener('error', error => { console.log(error) })

server.listen(3456, () => {
    console.log('Server is runnning!!');
});