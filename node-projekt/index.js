var express = require('express');
var app = express();
const bodyParser = require('body-parser');

const loginApi = require('./server/login');
const valueApi = require('./server/value');

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '2mb' }));
app.use(loginApi);
app.use(valueApi);

app.listen(8080, function() {
  console.log('Node.js STARTER is listening on port 8080! http://localhost:8080');
});