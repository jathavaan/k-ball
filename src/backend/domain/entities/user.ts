import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { PlayerReview } from "./playerReview";

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

  @OneToMany(() => PlayerReview, (playerReview) => playerReview.user)
  playerReviews!: PlayerReview[];
}
