var express = require('express');
var app = express();
var fetch = require('node-fetch');

app.get('/', function (req, res) {
  fetch('http://sendsms.kr/user')
    .then(function(res) {
        return res.text();
    }).then(function(body) {
        res.send('Hello API! Version 2<br>' + body);
    });
});

app.get('/healthcheck', function (req, res) {
  res.send('checking health... OK!');
});


app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
