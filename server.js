const { readFile } = require('fs');
const http = require('http');
const _ = require('lodash');

const server = http.createServer((req, res) => {

    // lodash
    const num = _.random(0,20);
    console.log(num);

    const greet = _.once(()=>{
        console.log('hello', num)
    });

    greet();
    greet();

    // console.log(req.url, req.method);

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