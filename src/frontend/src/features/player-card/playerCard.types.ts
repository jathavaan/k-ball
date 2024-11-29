import { Player } from "@shared/types.ts";
import { CardProps } from "@mui/material";

export interface PlayerCardBase extends Player {
  position: string;
  nationality: string;
  birthDate: string;
  age: number;
  averageRating?: number;
}

export interface PlayerCardProps extends PlayerCardBase, CardProps {}

export interface PlayerCardGridState {
  playerCards: PlayerCardBase[];
  currentPage: number;
  totalPages: number;
  loadedPages: number[];
  showScrollToTopButton: boolean;
}
