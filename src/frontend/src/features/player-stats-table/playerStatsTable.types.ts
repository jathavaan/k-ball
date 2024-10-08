export interface PlayerStatsProps {
    playerId: number;
    season: number;
    goals: number;
    assists: number;
    appearances: number;
    yellowCards: number;
    redCards: number;
  }
  
  export interface PlayerStatsTableProps {
    playerStatsTable: PlayerStatsProps[];
  }
  
  export interface PlayerStatsTableState {
    playerStatsTable: PlayerStatsProps[] | undefined;
  }
  