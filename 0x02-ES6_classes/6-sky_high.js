/**
 * Implement a class named SkyHighBuilding
 * that extends from Building:
 * @sqft: (Number) (must be assigned to the parent class Building)
 * @floors: (Number)
*/

import Building from './5-building';

export default class SkyHighBuilding extends Building {
  /* class: SkyHighBuilding */
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  /* set floors */
  set floors(value) {
    this._floors = value;
  }

  /* get floors */
  get floors() {
    return this._floors;
  }

  /* implement evacuationWarningMessage Method */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
