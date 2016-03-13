var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

var port = process.env.PORT || 3033;
var routes = require('./routes/generate');

app.use(routes);

app.listen(port);
console.log('server listening on port: ' + port);
