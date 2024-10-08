import { Player } from "../../shared/types.ts";
import { CardProps } from "@mui/material";

export interface PlayerProfileInfoBase extends Player {
  position: string;
  nationality: string;
  place: string;
  age: number;
  birthDate: string;
  height: number;
  weight: number;
}

export interface PlayerProfileInfoProps extends PlayerProfileInfoBase, CardProps {}

export interface PlayerProfileInfoState {
  playerProfileInfos: PlayerProfileInfoBase[];
}
