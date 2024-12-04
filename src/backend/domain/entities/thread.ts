import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user";
import { Player } from "./player";
import { ThreadComment } from "./threadComment";

@Entity()
export class Thread {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({ type: "varchar" })
  title!: string;
  @Column({ type: "text" })
  content!: string;
  @CreateDateColumn()
  timestamp!: Date;

  @OneToMany(() => ThreadComment, (threadComment) => threadComment.thread, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  threadComments!: ThreadComment[];
  @ManyToOne(() => User, (user) => user.threads, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  user!: User;
  @ManyToOne(() => Player, (player) => player.threads, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  player!: Player;
}
