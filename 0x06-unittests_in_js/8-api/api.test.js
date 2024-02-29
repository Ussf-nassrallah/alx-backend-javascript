const request = require('request');
const { expect } = require('chai');

describe('api integration test', () => {
  const apiUrl = 'http://localhost:7865';

  it('test GET /', (done) => {
    request.get(apiUrl, (err, res, body) => {
      expect(res.statusCode).to.be.eq(200);
      expect(res.body).to.be.eq('Welcome to the payment system');
      done();
    })
  });
});
