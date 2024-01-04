/**
 * Implement a class named EVCar that extends the Car class
 * @brand: (String)
 * @motor: (String)
 * @color: (String)
 * @range: (String)
*/

import Car from './10-car';

export default class EVCar extends Car {
  /* class EvCar thats extends the Car class */
  constructor(brand, motor, color, range) {
    /* get brand, motor, color from Car */
    super(brand, motor, color);
    this.range = range;
  }

  /* set EVCar range */
  set range(rangeValue) {
    this._range = rangeValue;
  }

  /* get range value */
  get range() {
    return this._range;
  }

  /* cloneCar method */
  cloneCar() {
    const Spe = super.constructor[Symbol.species];
    return new Spe();
  }
}
