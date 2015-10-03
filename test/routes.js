var request = require('supertest');
var proxyquire = require('proxyquire');
var seasonsFixture = require('./fixtures/seasons.json');

var badApp = proxyquire('../lib/app', {
  './getAllSeasons': () => {
    return Promise.reject('some error');
  },
});

var goodApp = proxyquire('../lib/app', {
  './getAllSeasons': () => {
    return Promise.resolve(seasonsFixture);
  },
});

describe('GET /seasons', () => {
  it('should retrieve all seasons', (done) => {
    request(goodApp)
      .get('/seasons')
      .expect(seasonsFixture, done);
  });

  it('should return 500 if fetching seasons fails', (done) => {
    request(badApp)
      .get('/seasons')
      .expect(500, done);
  });
});
