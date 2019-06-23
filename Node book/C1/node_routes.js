const http = require('http');

http.createServer((req, res) =>{
    if (req.url == '/'){
        res.writeHead(200, {
            'Content-Type':'text/plain'
        });
        res.write('This is ' + req.url);
        res.end();
    }
    res.writeHead(404);
    res.end(http.STATUS_CODES[404]);
}).listen(8080);