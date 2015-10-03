var express = require('express');
var getAllSeasons = require('./getAllSeasons');

var app = express();

app.get('/seasons', (req, res) => {
  getAllSeasons()
    .then(seasons => res.send(seasons))
    .catch(err => {
      console.log('error fetching seasons', err);
      res.status(500).send({
        message: 'error fetching seasons',
      });
    })
});

module.exports = app;
