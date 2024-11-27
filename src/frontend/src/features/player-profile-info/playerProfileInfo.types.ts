import { Player } from "@shared/types.ts";
import { CardProps } from "@mui/material";

export interface PlayerProfileInfoBase extends Player {
  position: string;
  nationality: string;
  flagUrl?: string;
  place: string;
  age: number;
  birthDate: string;
  height?: number;
  weight?: number;
  clubLogo: string;
}

export interface PlayerProfileInfoProps
  extends PlayerProfileInfoBase,
    CardProps {}

export interface PlayerProfileInfoState {
  playerProfileInfo: PlayerProfileInfoBase | undefined;
}
