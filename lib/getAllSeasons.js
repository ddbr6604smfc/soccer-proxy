var fetch = require('isomorphic-fetch');

var requestOptions = {
  headers: {
    'X-Auth-Token': process.env.FOOTBALL_DATA_TOKEN,
  },
};

function getAllSeasons() {
  return fetch('http://api.football-data.org/alpha/soccerseasons', requestOptions)
    .then(response => response.json());
}

module.exports = getAllSeasons;
