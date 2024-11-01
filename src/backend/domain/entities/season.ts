import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { PlayerSeason } from "./playerSeason";
import { ClubSeason } from "./clubSeason";

@Entity()
export class Season {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({ type: "int" })
  year!: number;

  @OneToMany(
    () => PlayerSeason,
    (playerSeason: PlayerSeason) => playerSeason.season,
  )
  playerSeasons!: PlayerSeason[];
  @OneToMany(() => ClubSeason, (clubSeason: ClubSeason) => clubSeason.season)
  clubSeasons!: ClubSeason[];
}
