var express = require('express');
var app = express();
var db = require('./db');

var router = require('./routes.js');


app.set('port', 3000);

app.use(express.json());
app.use('/', router);

app.get('/', (req, res) => {
  res.send('hello');
});



app.listen(app.get('port'));


module.exports.app = app;