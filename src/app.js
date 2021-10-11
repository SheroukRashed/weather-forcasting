const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();

const publicDir = path.join(__dirname, '../public');
const viewsDir = path.join(__dirname, '../templates/views');
const partialsDir = path.join(__dirname, '../templates/partials');
const bootstrabDir = path.join(__dirname, '../node_modules/bootstrap');
app.use(express.static(publicDir));
app.use(express.static(bootstrabDir));

app.set('view engine', '.hbs');
app.set('views', viewsDir);
hbs.registerPartials(partialsDir);

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/home', (req, res) => {
    res.render('home');
})

app.get('/faq', (req, res) => {
    res.render('faq', {
        title: 'FAQ'
    });
})

app.get('/faq/*', (req, res) => {
    res.render('404', {
        homepage: '/home'
    });
})

app.get('*', (req, res) => {
    res.render('404', {
        homepage: '/home'
    });
})
app.listen(3000, () => {

});