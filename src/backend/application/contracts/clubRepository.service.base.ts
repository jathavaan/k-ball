import { Club } from "../../domain/entities";
import { ClubDto } from "../dtos";

export interface ClubRepositoryServiceBase {
  getClubs: () => Promise<Club[]>;
  getClubByName: (name: string) => Promise<Club | null>;
  addClubs: (clubs: ClubDto[]) => Promise<boolean>;
  getClubByExternalId: (externalId: number) => Promise<Club | null>;
}
