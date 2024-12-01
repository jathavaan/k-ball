import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PlayerRating } from "./playerRating";
import { Thread } from "./thread";
import { ThreadComment } from "./threadComment";

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

  @OneToMany(() => PlayerRating, (playerReview) => playerReview.user, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  playerReviews!: PlayerRating[];
  @OneToMany(() => Thread, (thread) => thread.user)
  threads!: Thread[];
  @OneToMany(() => ThreadComment, (threadComment) => threadComment.user, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  threadComments!: ThreadComment[];
}
