import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BirthPlace } from "./birthPlace";
import { Player } from "./player";

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({ type: "text" })
  name!: string;
  @Column({ type: "text", nullable: true })
  flagUrl?: string;

  @OneToMany(() => BirthPlace, (birthPlace) => birthPlace.country)
  birthPlaces!: BirthPlace[];
  @OneToMany(() => Player, (player) => player.country, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  players!: Player[];
}
