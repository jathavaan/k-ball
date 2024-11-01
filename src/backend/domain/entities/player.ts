import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BirthPlace } from "./birthPlace";
import { Club } from "./club";
import { PlayerReview } from "./playerReview";
import { PlayerSeason } from "./playerSeason";
import { Position } from "./position";
import { Country } from "./country";

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({ type: "text" })
  fullName!: string;
  @Column({ type: "text" })
  firstName!: string;
  @Column({ type: "text" })
  lastName!: string;
  @Column({ type: "text" })
  imageUrl!: string;
  @Column({ type: "date" })
  birthDate!: Date;
  @Column({ type: "float", nullable: true })
  height?: number;
  @Column({ type: "float", nullable: true })
  weight?: number;
  @Column({ type: "integer" })
  externalId!: number;

  @ManyToOne(() => BirthPlace, (birthPlace) => birthPlace.players, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  birthPlace!: BirthPlace;
  @ManyToOne(() => Club, (club) => club.players, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  currentClub!: Club;
  @ManyToOne(() => Country, (country) => country.players)
  country!: Country;
  @OneToMany(() => PlayerReview, (playerReview) => playerReview.player)
  playerReviews!: PlayerReview[];
  @OneToMany(() => PlayerSeason, (playerSeason) => playerSeason.player)
  playerSeasons!: PlayerSeason[];
  @ManyToOne(() => Position, (position) => position.players, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
    eager: true,
  })
  position!: Position;
}
