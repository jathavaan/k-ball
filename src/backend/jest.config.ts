export default {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.json", // Specify the TypeScript configuration file
      },
    ],
  },
  testMatch: ["**/*.test.ts"],
};
