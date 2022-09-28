const express = require('express');
const nunjucks = require('nunjucks');
const data = require('./controller/index');

let app = express();
app.set('view engine', 'html');

nunjucks.configure('views', {
    autoescape: true,
    express: app
});


app.get('/', (req, res) => {
    res.render('home.html', {})
})

app.listen(8000, () => {
  console.log('server in localhost in port 8000', data);

});