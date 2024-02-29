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

  it('test GET /available_payments', (done) => {
    request.get(`${apiUrl}/available_payments`, (err, res, body) => {
      expect(res.statusCode).to.be.eq(200);
      expect(JSON.parse(res.body)).to.be.deep.eq(
        {
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        }
      );
      done();
    });
  });

  it('test POST /login', (done) => {
    request.post(`${apiUrl}/login`, { json: { userName: 'youssef nasrallah' } }, (err, res, body) => {
      expect(res.statusCode).to.be.eq(200);
      expect(res.body).to.be.eq('Welcome youssef nasrallah');
      done();
    });
  });
});
