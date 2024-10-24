import { Country } from "./country";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Player } from "./player";

@Entity()
export class BirthPlace {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({ type: "text" })
  name!: string;
  
  @ManyToOne(() => Country, (country) => country.birthPlaces)
  country!: Country;
  @OneToMany(() => Player, (player) => player.birthPlace)
  players!: Player[];
}
