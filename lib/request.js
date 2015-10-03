var fetch = require('isomorphic-fetch');

var requestOptions = {
  headers: {
    'X-Auth-Token': process.env.FOOTBALL_DATA_TOKEN,
  },
};

module.exports = function request(path) {
  var url = `http://api.football-data.org/alpha${path}`;
  return fetch(url, requestOptions).then(response => response.json());
};
