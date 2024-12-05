import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173/project2/",
    //baseUrl: "http://it2810-25.idi.ntnu.no/project2/",
  },
});
