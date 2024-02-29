const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  to('validate the usage of the Utils function', () => {
    const parent = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 2);
    expect(parent.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(parent.calculateNumber.callCount).to.be.equal(1);

    parent.calculateNumber.restore();
  });
});
