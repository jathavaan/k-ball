export interface PlayerFilterState {
  selectedCountryIds: number[];
  selectedPositionIds: number[];
  selectedClubIds: number[];
  tempClubIds: number[];
  tempCountryIds: number[];
  tempPositionIds: number[];
}

export interface CountryProps {
  id: number;
  name: string;
  flagUrl: string;
}

export interface PositionProps {
  id: number;
  name: string;
}

export interface ClubProps {
  id: number;
  name: string;
  logoUrl: string;
}
