import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { PlayerRating } from "./playerRating";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({ type: "text" })
  firstName!: string;
  @Column({ type: "text" })
  lastName!: string;
  @Column({ type: "text" })
  email!: string;
  @Column({ type: "text" })
  password!: string;

  @OneToMany(() => PlayerRating, (playerReview) => playerReview.user)
  playerReviews!: PlayerRating[];
}
