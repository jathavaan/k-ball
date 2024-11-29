import { Text } from "@features/ui";
import { CardTextProps } from "@features/ui/card-text/cardText.types.ts";

export const CardText = ({
  text,
  icon,
  secondary,
  ...props
}: CardTextProps) => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {icon}
      {!secondary ? (
        <Text
          text={text}
          {...props}
          sx={{
            fontSize: {
              xs: "0.7rem",
              md: "0.9rem",
            },
            textAlign: "left",
            marginLeft: "0.3rem",
          }}
        />
      ) : (
        <Text
          text={text}
          {...props}
          sx={(theme) => ({
            fontSize: {
              xs: "0.6rem",
              md: "0.7rem",
            },
            color: theme.palette.grey.A400,
            textAlign: "left",
            marginLeft: "0.3rem",
          })}
        />
      )}
    </section>
  );
};
