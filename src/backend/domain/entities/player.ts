import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { BirthPlace } from "./birthPlace";
import { Club } from "./club";
import { PlayerReview } from "./playerReview";
import { PlayerSeason } from "./playerSeason";

@Entity()
export class Player {
  @PrimaryColumn({ type: "int" })
  id!: number;
  @Column({ type: "text" })
  fullName!: string;
  @Column({ type: "text" })
  position!: string;
  @Column({ type: "text" })
  imageUrl!: string;
  @Column({ type: "date" })
  birthDate!: Date;
  @Column({ type: "float" })
  height!: number;
  @Column({ type: "float" })
  weight!: number;

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
  @OneToMany(() => PlayerReview, (playerReview) => playerReview.player)
  playerReviews!: PlayerReview[];
  @OneToMany(() => PlayerSeason, (playerSeason) => playerSeason.player)
  playerSeasons!: PlayerSeason[];
}
