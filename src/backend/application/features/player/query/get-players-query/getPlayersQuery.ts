export class GetPlayersQuery {
  constructor(
    public readonly options: {
      limit: number;
      offset: number;
      filters: {
        search?: string;
        clubIds?: number[];
        countryIds?: number[];
        positionIds?: number[];
        sortBy?: string;
        sortOrder?: string;
      };
    },
  ) {}
}
