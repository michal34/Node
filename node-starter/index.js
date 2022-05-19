var express = require('express');
var app = express();
const bodyParser = require('body-parser');

const loginApi = require('./server/login');

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '2mb' }));
app.use(loginApi);

app.listen(8090, function() {
  console.log('Node.js STARTER is listening on port 8080! http://localhost:8090');
});