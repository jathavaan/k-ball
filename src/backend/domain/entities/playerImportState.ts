import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PlayerImportState {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({ type: "date" })
  dateImported!: Date;

  constructor() {
    this.dateImported = new Date(Date.now());
  }
}
