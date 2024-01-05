/**
 * Implement a class named Building
 * @sqft: (Number)
*/

export default class Building {
  /* class: Building */
  constructor(sqft) {
    this.sqft = sqft;

    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  /* get sqft */
  get sqft() {
    return this._sqft;
  }

  /* set sqft */
  set sqft(value) {
    this._sqft = value;
  }
}
