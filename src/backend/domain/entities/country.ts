import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BirthPlace } from "./birthPlace";

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({ type: "text" })
  name!: string;
  @Column({ type: "text" })
  flag!: string;

  @OneToMany(() => BirthPlace, (birthPlace) => birthPlace.country)
  birthPlaces!: BirthPlace[];
}
