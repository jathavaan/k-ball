import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./user";
import { Player } from "./player";

@Entity()
export class PlayerReview {
  @PrimaryColumn({ type: "int" })
  userId!: number;
  @PrimaryColumn({ type: "int" })
  playerId!: number;
  @Column({ type: "int" })
  rating!: number;

  @ManyToOne(() => User, (user) => user.playerReviews)
  user!: User;
  @ManyToOne(() => Player, (player) => player.playerReviews)
  player!: Player;
}
