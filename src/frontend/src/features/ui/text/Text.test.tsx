import { render } from "@testing-library/react";
import { Text } from "@features/ui";

it("should match Text snapshot", () => {
  const { asFragment } = render(
    <Text
      onClick={function (): void {
        throw new Error("Function not implemented.");
      }}
      text={""}
    />,
  );
  expect(asFragment()).toMatchSnapshot();
});
