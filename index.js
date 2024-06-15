const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/experience', (req, res) => {
    res.render('experience');
})

app.get('/projects', (req, res) => {
    res.render('projects');
})

app.get('/cars', (req, res) => {
    res.render('mycars');
})

app.get('/dream_cars', (req, res) => {
    res.render('dreamcars');
})

app.listen(PORT, () => {
    console.log("LISTENING ON PORT " + PORT);
})