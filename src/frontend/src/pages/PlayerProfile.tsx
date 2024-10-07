import { PlayerProfileInfo } from "../features/player-profile-info";

export const PlayerProfile = () => {
  return (
    <PlayerProfileInfo
      playerId={2890}
      name="Jo Hyeon-Woo"
      team="Ulsan Hyundai FC"
      imageUrl="https://media.api-sports.io/football/players/2890.png"
      position="Goalkeeper"
      nationality="Korea Republic"
      age={33}
      birthDate="1991-09-25"
      height={189}
      weight={76}
      place="Seoul, Korea Republic"
    />
  );
};
