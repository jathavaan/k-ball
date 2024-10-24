import { Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Season } from "./season";
import { Club } from "./club";

@Entity()
export class ClubSeason {
  @PrimaryColumn()
  seasonId!: number;
  @PrimaryColumn()
  clubId!: number;

  @ManyToOne(() => Season, (season) => season.clubSeasons)
  season!: Season;
  @ManyToOne(() => Club, (club) => club.clubSeasons)
  club!: Club;
}
