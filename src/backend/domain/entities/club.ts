import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Player } from "./player";
import { PlayerSeason } from "./playerSeason";
import { ClubSeason } from "./clubSeason";

@Entity()
export class Club {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({ type: "text" })
  name!: string;
  @Column({ type: "text" })
  logoUrl!: string;

  @OneToMany(() => Player, (player) => player.currentClub)
  players!: Player[];
  @OneToMany(() => PlayerSeason , (playerSeason) => playerSeason.club)
  playerSeasons!: PlayerSeason[];
  @OneToMany(() => ClubSeason, (clubSeason) => clubSeason.club)
  clubSeasons!: ClubSeason[];

}
