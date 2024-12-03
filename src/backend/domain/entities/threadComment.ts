import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user";
import { Thread } from "./thread";

@Entity()
export class ThreadComment {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({ type: "text" })
  content!: string;
  @CreateDateColumn()
  timestamp!: Date;

  @ManyToOne(() => User, (user) => user.threadComments)
  user!: User;
  @ManyToOne(() => Thread, (thread) => thread.threadComments, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  thread!: Thread;
}
