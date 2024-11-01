import { PlayerCardProps } from "./playerCard.types.ts";

export const getPlayerCards = (): Promise<PlayerCardProps[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const playerCards: PlayerCardProps[] = [
        {
          playerId: 2890,
          fullName: "Jo Hyeon-Woo",
          club: "Ulsan Hyundai FC",
          imageUrl: "https://media.api-sports.io/football/players/2890.png",
          position: "Goalkeeper",
          nationality: "Korea Republic",
          age: 33,
        },
        {
          playerId: 2898,
          fullName: "Kim Young-Gwon",
          club: "Ulsan Hyundai FC",
          imageUrl: "https://media.api-sports.io/football/players/2898.png",
          position: "Defender",
          nationality: "Korea Republic",
          age: 34,
        },
        {
          playerId: 2905,
          fullName: "Lee Chung-Yong",
          club: "Ulsan Hyundai FC",
          imageUrl: "https://media.api-sports.io/football/players/2905.png",
          position: "Midfielder",
          nationality: "Korea Republic",
          age: 36,
        },
        {
          playerId: 33202,
          fullName: "Jo Jin-Woo",
          club: "Daegu FC",
          imageUrl: "https://media.api-sports.io/football/players/33202.png",
          position: "Defender",
          nationality: "Korea Republic",
          age: 25,
        },
        {
          playerId: 33937,
          fullName: "Won Du-Jae",
          club: "Ulsan Hyundai FC",
          imageUrl: "https://media.api-sports.io/football/players/33937.png",
          position: "Midfielder",
          nationality: "Korea Republic",
          age: 27,
        },
        {
          playerId: 34132,
          fullName: "Um Won-Sang",
          club: "Ulsan Hyundai FC",
          imageUrl: "https://media.api-sports.io/football/players/34132.png",
          position: "Attacker",
          nationality: "Korea Republic",
          age: 25,
        },
        {
          playerId: 34310,
          fullName: "Park Soo-Il",
          club: "Seongnam FC",
          imageUrl: "https://media.api-sports.io/football/players/34310.png",
          position: "Defender",
          nationality: "Korea Republic",
          age: 28,
        },
        {
          playerId: 34420,
          fullName: "Lee Myung-Jae",
          club: "Ulsan Hyundai FC",
          imageUrl: "https://media.api-sports.io/football/players/34420.png",
          position: "Defender",
          nationality: "Korea Republic",
          age: 31,
        },
      ];
      resolve(playerCards);
    }, 2000);
  });
};
