import { Player } from "../../shared/types.ts";
import { CardProps } from "@mui/material";

export interface PlayerProfileInfoProps extends Player, CardProps {
  position: string;
  nationality: string;
  place: string;
  age: number;
  birthDate: string;
  height: number;
  weight: number;
}

export interface PlayerProfileInfoState {
  playerProfileInfos: PlayerProfileInfoProps[];
}
