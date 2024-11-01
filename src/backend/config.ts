export const config = {
  // DB config
  DB_HOST: "it2810-25.idi.ntnu.no",
  // DB_HOST: "localhost",
  DB_PORT: 5432,
  DB_USERNAME: "postgres",
  DB_PASSWORD: "postgres",
  DB_NAME: "k-ball-db",

  // API config
  API_FOOTBALL_BASE_URL: "https://v3.football.api-sports.io",
  API_FOOTBALL_KEY: "d1e9c6711633d6c9373c9c9510f282f3",
  API_FOOTBALL_K_LEAGUE_ID: 292,

  // Import config
  SEASONS_TO_IMPORT: [2022], // TODO: Implement for multiple seasons when the system is up and running [2020, 2021, 2022]
};
