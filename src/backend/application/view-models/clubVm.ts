import { Club } from "../../domain/entities";

export class ClubVm {
  id: number;
  name: string;
  logoUrl: string;

  constructor(club: Club) {
    this.id = club.id;
    this.name = club.name;
    this.logoUrl = club.logoUrl;
  }
}
