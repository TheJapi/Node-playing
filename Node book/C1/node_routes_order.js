const http = require('http');

const route = (req, res) => {
    res.writeHead(200);
    res.write('This is ' + req.url);
    res.end();
}

const routes = {'/':'', '/asd':''};

http.createServer((req, res) => {
    if (req.url in routes){
        return route(req, res);
    }
    res.writeHead(404);
    res.end(http.STATUS_CODES[404]);
}).listen(8080);