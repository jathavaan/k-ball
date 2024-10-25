import {
  ClubProps,
  CountryProps,
  PositionProps,
} from "./playerFilters.types.ts";

export const getCountries = async (): Promise<CountryProps[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const countries: CountryProps[] = [
        {
          id: 1,
          name: "England",
          flagUrl: "https://media.api-sports.io/flags/gb.svg",
        },
        {
          id: 2,
          name: "Spain",
          flagUrl: "https://media.api-sports.io/flags/es.svg",
        },
        {
          id: 3,
          name: "Germany",
          flagUrl: "https://media.api-sports.io/flags/de.svg",
        },
        {
          id: 4,
          name: "Italy",
          flagUrl: "https://media.api-sports.io/flags/it.svg",
        },
        {
          id: 5,
          name: "China",
          flagUrl: "https://media.api-sports.io/flags/cn.svg",
        },
        {
          id: 6,
          name: "South Korea",
          flagUrl: "https://media.api-sports.io/flags/kr.svg",
        },
      ];

      resolve(countries);
    }, 2000);
  });
};

export const getPositions = async (): Promise<PositionProps[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const positions: PositionProps[] = [
        { id: 1, name: "Goalkeeper" },
        { id: 2, name: "Defender" },
        { id: 3, name: "Midfielder" },
        { id: 4, name: "Forward" },
      ];

      resolve(positions);
    }, 2000);
  });
};

export const getClubs = async (): Promise<ClubProps[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const clubs: ClubProps[] = [
        {
          id: 1,
          name: "Jeonbuk Hyundai Motors",
          logoUrl: "https://media.api-sports.io/football/teams/2762.png",
        },
        {
          id: 2,
          name: "Ulsan Hyundai",
          logoUrl: "https://media.api-sports.io/football/teams/2767.png",
        },
        {
          id: 3,
          name: "FC Seoul",
          logoUrl: "https://media.api-sports.io/football/teams/2759.png",
        },
        {
          id: 4,
          name: "Pohang Steelers",
          logoUrl: "https://media.api-sports.io/football/teams/2763.png",
        },
        {
          id: 5,
          name: "Suwon Samsung Bluewings",
          logoUrl: "https://media.api-sports.io/football/teams/2764.png",
        },
        {
          id: 6,
          name: "Jeju United",
          logoUrl: "https://media.api-sports.io/football/teams/2765.png",
        },
      ];

      resolve(clubs);
    }, 2000);
  });
};
