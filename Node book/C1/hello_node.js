const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'application/json'});
    res.write('Hello world');
    res.end();
}).listen(8080);

