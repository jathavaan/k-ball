import { PlayerPositionProps } from "@features/player-position/playerPosition.types.ts";
import {
  StyledBox,
  StyledImage,
} from "@features/player-position/playerPosition.style.ts";
import { ErrorAlert, Text } from "@features/ui";
import {
  PositionAttack,
  PositionDefence,
  PositionGoalkeeper,
  PositionMidfield,
} from "@/assets";

export const PlayerPosition = ({ position, club }: PlayerPositionProps) => {
  return (
    <StyledBox>
      <Text text={`${position} @ ${club}`} sx={() => ({ mt: 1 })} />
      {position.toLowerCase() === "goalkeeper" ? (
        <StyledImage src={PositionGoalkeeper} alt="Goalkeeper position card" />
      ) : position.toLowerCase() === "defender" ? (
        <StyledImage src={PositionDefence} alt="Goalkeeper position card" />
      ) : position.toLowerCase() === "midfielder" ? (
        <StyledImage src={PositionMidfield} alt="Midfielder position card" />
      ) : position.toLowerCase() === "attacker" ? (
        <StyledImage src={PositionAttack} alt="Attacker position card" />
      ) : (
        <ErrorAlert message="Failed to load position" />
      )}
    </StyledBox>
  );
};
