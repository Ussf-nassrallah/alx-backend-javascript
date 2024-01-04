/**
 * Implement a class named Car
 * @brand: (String)
 * @motor: (String)
 * @color: (String)
*/

export default class Car {
  /* class: Car */
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  /* set car brand */
  set brand(value) {
    /* brand value must be a string */
    // if (typeof value !== 'string') {
    //   throw new TypeError('Brand must be a string');
    // }

    this._brand = value;
  }

  /* get car brand */
  get brand() {
    return this._brand;
  }

  /* set car motor */
  set motor(value) {
    /* motor value must be a string */
    // if (typeof value !== 'string') {
    //   throw new TypeError('Motor must be a string');
    // }

    this._motor = value;
  }

  /* get car motor */
  get motor() {
    return this._motor;
  }

  /* set car color */
  set color(value) {
    /* color value must be a string */
    // if (typeof value !== 'string') {
    //   throw new TypeError('Color must be a string');
    // }

    this._color = value;
  }

  /* get car color */
  get color() {
    return this._color;
  }

  /* return the object that will be created from Car */
  static get [Symbol.species]() {
    return this;
  }

  /* cloneCar method */
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
