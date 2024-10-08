import { PlayerProfileInfo } from "../features/player-profile-info";
import { usePlayerProfileInfoCard } from "../features/player-profile-info/playerProfileInfo.hooks";
import { LinearProgressBar, ErrorAlert } from "../features/ui";

export const PlayerProfile = () => {
  //const playerId = useParams<{ playerId: string }>().playerId;
  const playerId = 2905;
  const { playerProfileInfos, isLoading, isError } = usePlayerProfileInfoCard(
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
        <PlayerProfileInfo
          playerId={playerProfileInfos?.[0]?.playerId ?? 0}
          name={playerProfileInfos?.[0]?.name ?? ""}
          team={playerProfileInfos?.[0]?.team ?? ""}
          teamLogo={playerProfileInfos?.[0]?.teamLogo ?? ""}
          imageUrl={playerProfileInfos?.[0]?.imageUrl ?? ""}
          position={playerProfileInfos?.[0]?.position ?? ""}
          nationality={playerProfileInfos?.[0]?.nationality ?? ""}
          flag={playerProfileInfos?.[0]?.flag ?? ""}
          age={playerProfileInfos?.[0]?.age ?? 0}
          birthDate={playerProfileInfos?.[0]?.birthDate ?? ""}
          height={playerProfileInfos?.[0]?.height ?? 0}
          weight={playerProfileInfos?.[0]?.weight ?? 0}
          place={playerProfileInfos?.[0]?.place ?? ""}
        />
      )}
    </>
  );
};
