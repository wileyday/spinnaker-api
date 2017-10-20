var express = require('express');
var app = express();

app.get('/api', function (req, res) {
  res.send('Hello API! Version 2');
});

app.get('/healthcheck', function (req, res) {
  res.send('checking health... OK!');
});


app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
