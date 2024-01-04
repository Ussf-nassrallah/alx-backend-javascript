/**
 * Implement a class named Currency
 * @code: (String)
 * @name: (String)
*/

export default class Currency {
  /* class: Currency */
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /* store code in an “underscore” attribute  */
  set code(value) {
    /* check if code value is not a string */
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    /* set code value */
    this._code = value;
  }

  /* get code value */
  get code() {
    return this._code;
  }

  /* store name in an “underscore” attribute */
  set name(value) {
    /* check if name value is not a string */
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    /* set Name value */
    this._name = value;
  }

  /* get name value */
  get name() {
    return this._name;
  }

  /* Implement displayFullCurrency Method */
  displayFullCurrency() {
    /* return the attributes in the following format name (code) */
    return `${this._name} (${this._code})`;
  }
}
