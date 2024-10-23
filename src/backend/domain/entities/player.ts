import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { BirthPlace } from "./birthPlace";
import { Club } from "./club";
import { Position } from "@domain/entities/position";

@Entity()
export class Player {
  @PrimaryColumn({ type: "int" })
  id!: number;
  @Column({ type: "text" })
  fullName!: string;
  @Column({ type: "text" })
  imageUrl!: string;
  @Column({ type: "date" })
  birthDate!: Date;
  @Column({ type: "float" })
  height!: number;
  @Column({ type: "float" })
  weight!: number;

  @ManyToOne(() => BirthPlace, (birthPlace) => birthPlace.players)
  birthPlace!: BirthPlace;
  @ManyToOne(() => Club, (club) => club.players)
  club!: Club;
  @ManyToOne(() => Position, (position) => position.players)
  position!: Position;
}
