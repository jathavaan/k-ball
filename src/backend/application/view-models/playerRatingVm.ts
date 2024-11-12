﻿export class PlayerRatingVm {
  attack: number;
  defence: number;
  passing: number;
  intelligence: number;

  constructor(
    attack: number,
    defence: number,
    passing: number,
    intelligence: number,
  ) {
    this.attack = parseFloat(attack.toFixed(2));
    this.defence = parseFloat(defence.toFixed(2));
    this.passing = parseFloat(passing.toFixed(2));
    this.intelligence = parseFloat(intelligence.toFixed(2));
  }
}
