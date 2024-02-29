const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise ', () => {
    return new Promise((done) => {
      getPaymentTokenFromAPI(true)
        .then((res) => {
          expect(res).to.deep.equal({ data: 'Successful response from the API' });
          done();
        });
    });
  });
});
