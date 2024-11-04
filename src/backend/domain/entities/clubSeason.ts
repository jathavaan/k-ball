import { Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Season } from "./season";
import { Club } from "./club";

@Entity()
export class ClubSeason {
  @PrimaryColumn({ type: "int" })
  seasonId!: number;
  @PrimaryColumn({ type: "int" })
  clubId!: number;

  @ManyToOne(() => Season, (season) => season.clubSeasons, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  season!: Season;
  @ManyToOne(() => Club, (club) => club.clubSeasons, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  club!: Club;
}
