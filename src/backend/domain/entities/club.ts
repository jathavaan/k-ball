import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Player } from "./player";

@Entity()
export class Club {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({ type: "text" })
  name!: string;
  @OneToMany(() => Player, (player) => player.club)
  players!: Player[];
}
