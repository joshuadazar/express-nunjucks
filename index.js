const express = require('express');
const nunjucks = require('nunjucks');
const data = require('./data/data.json');


let app = express();
app.set('view engine', 'html');

nunjucks.configure('views', {
  autoescape: true,
  express: app
});


app.get('/', (req, res) => {
  res.render('home', { data })
})
app.use(express.static(__dirname + '/views'));
app.listen(8000, () => {
  console.log('server in localhost in port 8000');
});