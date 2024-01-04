/**
 * Implement a class named Pricing
 * @amount: (Number)
 * currency: (Currency)
*/

export default class Pricing {
  /* class: Pricing */
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /* store amount in an “underscore” attribute  */
  set amount(value) {
    /* check if amount value is not a number */
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    /* set amount value */
    this._amount = value;
  }

  /* get amount value */
  get amount() {
    return this._amount;
  }

  /* store currency in an “underscore” attribute  */
  set currency(value) {
    /* check if currency value is not an object */
    if (typeof value !== 'object') {
      throw new TypeError('Currency must be an object');
    }
    /* set amount value */
    this._currency = value;
  }

  /* get currency value */
  get currency() {
    return this._currency;
  }

  /* Implement a displayFullPrice Method */
  displayFullPrice() {
    /**
     * returns the attributes in the following format
     * amount currency_name (currency_code)
    */
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  /* Implement a convertPrice Method */
  static convertPrice(amount, conversionRate) {
    /**
     * function should return the amount multiplied
     * by the conversion rate.
    */
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }

    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }

    return amount * conversionRate;
  }
}
