var express = require('express');
var fetch = require('isomorphic-fetch');

var app = express();
var port = process.env.PORT || 3000;

app.get('/seasons', (req, res, next) => {
  var requestOptions = {
    headers: {
      'X-Auth-Token': process.env.FOOTBALL_DATA_TOKEN,
    },
  };

  return fetch('http://api.football-data.org/alpha/soccerseasons', requestOptions)
    .then(response => response.json())
    .then(seasons => {
      res.send(seasons);
    })
    .catch(err => {
      console.log('error fetching seasns', err);
      res.status(500).send({
        message: 'error fetching seasons',
      });
    });
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
