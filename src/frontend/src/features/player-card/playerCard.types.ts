﻿import { Player } from "../../shared/types.ts";
import { CardProps } from "@mui/material";

export interface PlayerCardBase extends Player {
  position: string;
  nationality: string;
  age: number;
}

export interface PlayerCardProps extends PlayerCardBase, CardProps {}

export interface PlayerCardState {
  playerCards: PlayerCardBase[];
}
