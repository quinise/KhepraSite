const express = require('express');
const path = require("path");
const port = 3000;

var app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "/public")));

app.get('/', function(req, res) {
  res.render('home.ejs')})

app.get('/about', function(req, res) {
  res.render('about.ejs')})

app.get('/history', function(req, res) {
  res.render('history.ejs')})

app.get('/appointments', function(req, res) {
  res.render('appointments.ejs')})

app.get('/contact', function(req, res) {
  res.render('contact.ejs')})

// Handling non matching request from the client
app.use((req, res, next) => {
    res.status(404).render('error.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}` );
});