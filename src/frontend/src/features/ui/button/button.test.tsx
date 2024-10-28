import { render } from "@testing-library/react";
import { Button } from "./Button";

it("should match Button snapshot", () => {
  const { asFragment } = render(
    <Button
      onClick={function (): void {
        throw new Error("Function not implemented.");
      }}
      text={""}
    />,
  );
  expect(asFragment()).toMatchSnapshot();
});
