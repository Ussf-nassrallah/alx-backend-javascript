const { assert } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToAPI = require('./5-payment');

describe('sendPaymentRequestToAPI', () => {
  let clgSpy;

  beforeEach(() => {
    clgSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    clgSpy.restore();
  });

  it('should display the correct message for totalAmount 100 and totalShipping 20', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(120);

    sendPaymentRequestToAPI(100, 20);
    assert.isTrue(clgSpy.calledOnceWithExactly('The total is: 120'));
    calculateNumberStub.restore();
  });

  it('should display the correct message for totalAmount 10 and totalShipping 10', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(20);

    sendPaymentRequestToAPI(10, 10);
    assert.isTrue(clgSpy.calledOnceWithExactly('The total is: 20'));
    calculateNumberStub.restore();
  });
});