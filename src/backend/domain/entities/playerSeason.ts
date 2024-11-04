import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Index,
  OneToOne,
} from "typeorm";
import { Player } from "./player";
import { Club } from "./club";
import { Season } from "./season";
import { PlayerStats } from "./playerStats";

@Entity()
@Index(["player", "club", "season"], { unique: true })
export class PlayerSeason {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Player, (player) => player.playerSeasons, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  player!: Player;
  @ManyToOne(() => Club, (club) => club.playerSeasons, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  club!: Club;
  @ManyToOne(() => Season, (season) => season.playerSeasons, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  season!: Season;
  @OneToOne(() => PlayerStats, (playerStats) => playerStats.playerSeason)
  playerStats!: PlayerStats;
}
