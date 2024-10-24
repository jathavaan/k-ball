import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    Index,
  } from "typeorm";
  import { Player } from "./player";
  import { Club } from "./club";
  import { Season } from "./season";
  
  @Entity()
  @Index(["player", "club", "season"], { unique: true })
  export class PlayerSeason {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @ManyToOne(() => Player, (player) => player.playerSeasons)
    player!: Player;
    @ManyToOne(() => Club, (club) => club.playerSeasons)
    club!: Club;
    @ManyToOne(() => Season, (season) => season.playerSeasons)
    season!: Season;
  }
  