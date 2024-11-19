import { Column } from "typeorm";

export class PlayerRatingDto {
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
    this.attack = attack;
    this.defence = defence;
    this.passing = passing;
    this.intelligence = intelligence;
  }
}
