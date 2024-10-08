import { PlayerProfileInfo } from "../features/player-profile-info";
import { usePlayerProfileInfoCard } from "../features/player-profile-info/playerProfileInfo.hooks";
import { LinearProgressBar, ErrorAlert } from "../features/ui";

export const PlayerProfile = () => {
  //const playerId = useParams<{ playerId: string }>().playerId;
  const playerId = 2890;
  const { playerProfileInfo, isLoading, isError } = usePlayerProfileInfoCard(
    Number(playerId),
  );

  return (
    <>
      {isLoading ? (
        <LinearProgressBar />
      ) : isError ? (
        <ErrorAlert
          message={"Oops! Something went wrong while fetching the player data"}
        />
      ) : (
        playerProfileInfo && (
          <PlayerProfileInfo
            playerId={playerProfileInfo.playerId}
            name={playerProfileInfo.name}
            team={playerProfileInfo.team}
            teamLogo={playerProfileInfo.teamLogo}
            imageUrl={playerProfileInfo.imageUrl}
            position={playerProfileInfo.position}
            nationality={playerProfileInfo.nationality}
            flag={playerProfileInfo.flag}
            age={playerProfileInfo.age}
            birthDate={playerProfileInfo.birthDate}
            height={playerProfileInfo.height}
            weight={playerProfileInfo.weight}
            place={playerProfileInfo.place}
          />
        )
      )}
    </>
  );
};
