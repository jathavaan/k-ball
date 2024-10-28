import { render } from "@testing-library/react";
import ArrowDownwardIcon from "./ArrowDownwardIcon";

it("should match ArrowDownwardIcon snapshot", () => {
  const { asFragment } = render(
    <ArrowDownwardIcon
      onClick={function (): void {
        throw new Error("Function not implemented.");
      }}
    />,
  );
  expect(asFragment()).toMatchSnapshot();
});
