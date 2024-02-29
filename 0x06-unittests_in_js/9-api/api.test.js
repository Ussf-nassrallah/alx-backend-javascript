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

  it('test GET /cart/12', (done) => {
    request.get(`${apiUrl}/cart/12`, (err, res, body) => {
      expect(res.statusCode).to.be.eq(200);
      expect(res.body).to.be.eq('Payment methods for cart 12');
      done();
    });
  });

  it('test GET /cart/string', (done) => {
    request.get(`${apiUrl}/cart/string`, (err, res, body) => {
      expect(res.statusCode).to.be.eq(404);
      done();
    });
  });

  it('test GET /cart/-12', (done) => {
    request.get(`${apiUrl}/cart/-12`, (err, res, body) => {
      expect(res.statusCode).to.be.eq(404);
      done();
    });
  });
});
