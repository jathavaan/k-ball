import { Player } from "../../shared/types.ts";
import { CardProps } from "@mui/material";

export interface PlayerCardProps extends Player, CardProps {
  position: string;
  nationality: string;
  age: number;
}

export interface PlayerCardState {
  playerCards: PlayerCardProps[];
}
