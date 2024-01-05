/**
 * Implement a class named Airport:
 * @name: (String)
 * @code: (String)
*/

export default class Airport {
  /* class: Airport */
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  /* set Airport Name */
  set name(value) {
    this._name = value;
  }

  /* get Airport Name */
  get name() {
    return this._name;
  }

  /* set Airport code */
  set code(value) {
    this._code = value;
  }

  /* get Airport code */
  get code() {
    return this._code;
  }

  /* change The default string description */
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
