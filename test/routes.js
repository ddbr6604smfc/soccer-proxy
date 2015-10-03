var request = require('supertest');
var proxyquire = require('proxyquire');
var seasonsFixture = require('./fixtures/seasons.json');

var badApp = proxyquire('../lib/app', {
  './request': () => Promise.reject('some error'),
});

var goodApp = proxyquire('../lib/app', {
  './request': () => Promise.resolve(seasonsFixture),
});

describe('GET *', () => {
  it('should forward requests to the api', (done) => {
    request(goodApp)
      .get('/soccerseasons/12/fixtures')
      .expect(seasonsFixture, done);
  });

  it('should return 500 if forwarding fails', (done) => {
    request(badApp)
      .get('/teams/389/fixtures')
      .expect(500, done);
  });
});
