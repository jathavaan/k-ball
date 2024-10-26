import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import { PlayerSeason } from "./playerSeason";

@Entity()
export class PlayerStats {
  @PrimaryColumn({ type: "int" }) 
  playerSeasonId!: number;
  
  @OneToOne(() => PlayerSeason, { onDelete: "CASCADE", onUpdate: "CASCADE" })  
  @JoinColumn({ name: "playerSeasonId" }) 
  playerSeason!: PlayerSeason;

  @Column({ type: "int" })
  goals!: number;
  @Column({ type: "int" })
  assists!: number;
  @Column({ type: "int" })
  appearances!: number;
  @Column({ type: "int" })
  yellowCards!: number;
  @Column({ type: "int" })
  redCards!: number;
}
