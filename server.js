const path = require('path');
const consolidate = require('consolidate');
const express = require('express');
const mock = require('./src/data/mock.json');
const app = express();

app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'templates'));

//middlewares
app.use('/dist', express.static('dist'));

//default route
app.get('/', (req, res) => res.render('index', { title : '#ITWeek 2017' }));

//your routes
app.get('/items', (req, res) => res.json(mock));

const listener = app.listen(1337, () =>
  console.log(`Running app on ${listener.address().address}${listener.address().port}`));
