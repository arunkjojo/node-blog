const { readFile } = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
        break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
        break;
        case '/about-me':
            case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
        break;
        default:
            path += '404.html';
            res.statusCode = 404;
        break;
    }


    readFile(path, (error, data) => {
        if(error){
            console.log(error);
            res.end();
        } else {
            // res.write(data);
            res.end(data);
        }
    })
    // res.write('<h1>Hello, Devil</h1>');
    // res.write("<p>I'm, Arun</p>");
    // res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on post 3000');
});