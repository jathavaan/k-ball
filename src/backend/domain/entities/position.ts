﻿import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Player } from "@domain/entities/player";

@Entity()
export class Position {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({ type: "text" })
  name!: string;

  @OneToMany(() => Player, (player) => player.position)
  players!: Player[];
}
