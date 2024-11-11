import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./user";
import { Player } from "./player";

@Entity()
export class PlayerRating {
  @PrimaryColumn({ type: "int" })
  userId!: number;
  @PrimaryColumn({ type: "int" })
  playerId!: number;
  @Column({ type: "int" })
  attack!: number;
  @Column({ type: "int" })
  defence!: number;
  @Column({ type: "int" })
  passing!: number;
  @Column({ type: "int" })
  intelligence!: number;

  @ManyToOne(() => User, (user) => user.playerReviews, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  user!: User;
  @ManyToOne(() => Player, (player) => player.playerReviews, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  player!: Player;
}
