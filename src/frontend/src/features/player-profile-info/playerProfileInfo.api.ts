import { PlayerProfileInfoProps } from "./playerProfileInfo.types.ts";

export const getPlayerProfileInfos = ({
  queryKey,
}: {
  queryKey: [string, number];
}): Promise<PlayerProfileInfoProps[]> => {
  const [, playerId] = queryKey;
  return new Promise((resolve) => {
    setTimeout(() => {
      const playerProfileInfos: PlayerProfileInfoProps[] = [
        {
          playerId: 2890,
          name: "Jo Hyeon-Woo",
          team: "Ulsan Hyundai FC",
          teamLogo: "https://media.api-sports.io/football/teams/2767.png",
          imageUrl: "https://media.api-sports.io/football/players/2890.png",
          position: "Goalkeeper",
          nationality: "Korea Republic",
          flag: "https://media.api-sports.io/flags/kr.svg",
          age: 33,
          birthDate: "1991-09-25",
          height: 189,
          weight: 76,
          place: "Seoul, Korea Republic",
        },
        {
          playerId: 2898,
          name: "Kim Young-Gwon",
          team: "Ulsan Hyundai FC",
          teamLogo: "",
          imageUrl: "https://media.api-sports.io/football/players/2898.png",
          position: "Defender",
          nationality: "Korea Republic",
          flag: "https://media.api-sports.io/flags/kr.svg",
          age: 34,
          birthDate: "1990-02-27",
          height: 186,
          weight: 74,
          place: "Jeonju, Korea Republic",
        },
        {
          playerId: 2905,
          name: "Lee Chung-Yong",
          team: "Ulsan Hyundai FC",
          teamLogo: "",
          imageUrl: "https://media.api-sports.io/football/players/2905.png",
          position: "Midfielder",
          nationality: "Korea Republic",
          flag: "https://media.api-sports.io/flags/kr.svg",
          age: 36,
          birthDate: "1988-07-02",
          height: 180,
          weight: 70,
          place: "Seoul, Korea Republic",
        },
        {
          playerId: 33202,
          name: "Jo Jin-Woo",
          team: "Daegu FC",
          teamLogo: "",
          imageUrl: "https://media.api-sports.io/football/players/33202.png",
          position: "Defender",
          nationality: "Korea Republic",
          flag: "https://media.api-sports.io/flags/kr.svg",
          age: 25,
          birthDate: "1999-03-15",
          height: 185,
          weight: 78,
          place: "Daegu, Korea Republic",
        },
        {
          playerId: 33937,
          name: "Won Du-Jae",
          team: "Ulsan Hyundai FC",
          teamLogo: "",
          imageUrl: "https://media.api-sports.io/football/players/33937.png",
          position: "Midfielder",
          nationality: "Korea Republic",
          flag: "https://media.api-sports.io/flags/kr.svg",
          age: 27,
          birthDate: "1997-11-18",
          height: 182,
          weight: 72,
          place: "Busan, Korea Republic",
        },
        {
          playerId: 34132,
          name: "Um Won-Sang",
          team: "Ulsan Hyundai FC",
          teamLogo: "",
          imageUrl: "https://media.api-sports.io/football/players/34132.png",
          position: "Attacker",
          nationality: "Korea Republic",
          flag: "https://media.api-sports.io/flags/kr.svg",
          age: 25,
          birthDate: "1999-01-06",
          height: 173,
          weight: 68,
          place: "Incheon, Korea Republic",
        },
        {
          playerId: 34310,
          name: "Park Soo-Il",
          team: "Seongnam FC",
          teamLogo: "",
          imageUrl: "https://media.api-sports.io/football/players/34310.png",
          position: "Defender",
          nationality: "Korea Republic",
          flag: "https://media.api-sports.io/flags/kr.svg",
          age: 28,
          birthDate: "1996-04-05",
          height: 178,
          weight: 73,
          place: "Gwangju, Korea Republic",
        },
        {
          playerId: 34420,
          name: "Lee Myung-Jae",
          team: "Ulsan Hyundai FC",
          teamLogo: "",
          imageUrl: "https://media.api-sports.io/football/players/34420.png",
          position: "Defender",
          nationality: "Korea Republic",
          flag: "https://media.api-sports.io/flags/kr.svg",
          age: 31,
          birthDate: "1993-12-14",
          height: 177,
          weight: 69,
          place: "Daejeon, Korea Republic",
        },
      ];
      const player = playerProfileInfos.find((p) => p.playerId === playerId);
      resolve(player ? [player] : []);
    }, 1000);
  });
};
