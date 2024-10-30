import { Club } from "../../domain/entities";

export interface ClubRepositoryServiceBase {
  getClubs: () => Promise<Club[]>;
  getClubByName: (name: string) => Promise<Club | null>;
  addClubs: (clubs: Club[]) => Promise<boolean>;
}
