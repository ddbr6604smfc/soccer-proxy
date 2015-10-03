var nock = require('nock');
var seasonsFixture = require('./fixtures/seasons');
var request = require('../lib/request');

describe('request', () => {
  it('should request valid football-data.org endpoint', (done) => {
    var api = nock('http://api.football-data.org')
      .get('/alpha/soccerseasons/5/fixtures')
      .reply(200, seasonsFixture);

    request('/soccerseasons/5/fixtures').then(fixtures => {
      fixtures.should.eql(seasonsFixture);
      done();
    });
  });
});
