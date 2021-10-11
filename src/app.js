const path = require('path');
const weather = require('../src/utils/weather');
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

app.get('/weather', (req, res) => {
    if(!req.query.latitude || !req.query.longitude){
        res.render('404', {
            homepage: '/home',
            title: 'You must select a specific place from the map'
        });
    }else{
        var lat = req.query.latitude;
        var lng = req.query.longitude;
        weather(lat, lng, (err, weatherStatus) =>{
            if(err){
                res.render('404', {
                    homepage: '/home',
                    title: err,
                });
            }else{
                res.send(weatherStatus);
            }
        });
    }
})

app.get('/faq', (req, res) => {
    res.render('faq', {
        title: 'FAQ'
    });
})

app.get('/faq/*', (req, res) => {
    res.render('404', {
        homepage: '/home',
        title: 'The page you are looking for not avaible!'
    });
})

app.get('*', (req, res) => {
    res.render('404', {
        homepage: '/home',
        title: 'The page you are looking for not avaible!'
    });
})
app.listen(3000, () => {

});