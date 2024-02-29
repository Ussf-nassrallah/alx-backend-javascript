const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
// const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  to('validate the usage of the Utils function', () => {
    const parent = sinon.spy(Utils);
    expect(parent.calculateNumber.calledWith('SUM', 100, 20)).to.be.eq(true);
  });
});
