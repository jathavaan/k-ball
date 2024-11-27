import { expect } from "vitest";

expect.addSnapshotSerializer({
  test: (val: unknown): val is string =>
    typeof val === "string" && /css-[a-z0-9]+-/.test(val),
  print: (val: string) => val.replace(/css-[a-z0-9]+-/g, "css-dynamic-"),
});
