import { TableProps } from "@mui/material";

export interface PlayerStatsProps {
  season: number;
  goals: number;
  assists: number;
  appearances: number;
  yellowCards: number;
  redCards: number;
}

export interface PlayerStatsTableProps extends TableProps {
  playerStatsTable: PlayerStatsProps[];
}

export interface PlayerStatsTableState {
  playerStatsTable: PlayerStatsProps[] | undefined;
}
