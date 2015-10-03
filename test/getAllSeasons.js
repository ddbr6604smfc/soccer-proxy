var nock = require('nock');
var seasonsFixture = require('./fixtures/seasons');
var getAllSeasons = require('../lib/getAllSeasons');

describe('getAllSeasons', () => {
  it('should fetch all seasons', (done) => {
    nock('http://api.football-data.org/')
      .get('/alpha/soccerseasons')
      .reply(200, seasonsFixture);

    getAllSeasons()
      .then(seasons => {
        seasons.should.eql(seasonsFixture);
        done();
      })
      .catch(err => {
        console.log('error', err);
      })
  });
});
