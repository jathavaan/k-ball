import { Position } from "@domain/entities";

export class PositionVm {
  id: number;
  name: string;

  constructor(position: Position) {
    this.id = position.id;
    this.name = position.name;
  }
}
