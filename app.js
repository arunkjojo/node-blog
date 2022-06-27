const express = require('express');

// express app
const app = express();

// listen for request
app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<h1>Home Page</h1>');
    res.sendFile('./views/index.html', { root: __dirname })
    res.statusCode=304;
});

app.get('/about', (req, res) => {
    // res.send('<h1>About Page</h1>');
    res.sendFile('./views/about.html', { root: __dirname })
    res.statusCode=304;
});

// redirect
app.get('/about-us', (req, res) => {
    res.status(301).redirect('/about');
});

// 404 page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname })
})