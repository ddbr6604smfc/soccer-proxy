var express = require('express');
var cors = require('cors');
var request = require('./request');

var app = express();

app.use(cors());

app.get('*', (req, res) => {
  request(req.url).then(
    response => res.send(response),
    err => res.status(500).send({message: err.message,})
  );
});

module.exports = app;
