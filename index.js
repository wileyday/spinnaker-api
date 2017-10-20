var express = require('express');
var app = express();
var request = require('request');

app.get('/', function (req, res) {
  request('http://private.sendsms.kr/user', function (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
    res.send('Hello API! Version 2<br>' + body);
  });
});

app.get('/healthcheck', function (req, res) {
  res.send('checking health... OK!');
});


app.listen(7001, function () {
  console.log('Example app listening on port 7001!');
});
