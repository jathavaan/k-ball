export interface DatabaseImportServiceBase {
  populateDatabase(): Promise<boolean>;

  insertClubs(): Promise<boolean>;

  insertPlayers(): Promise<boolean>;

  insertCountries(): Promise<boolean>;
}
