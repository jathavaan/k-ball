import { Player } from "../../domain/entities";

export class PlayerVm {
  id: number;
  fullName: string;
  currentClub: string;
  imageUrl: string;
  position: string;
  nationality: string;
  age: number;
  clubLogoUrl: string;
  birthDate: Date;
  averageRating?: number;

  constructor(player: Player, averageRating?: number) {
    this.id = player.id;
    this.fullName = player.fullName;
    this.currentClub = player.currentClub.name;
    this.imageUrl = player.imageUrl;
    this.position = player.position ? player.position.name : "N/A";
    this.nationality = player.country?.name ? player.country.name : "N/A";
    this.clubLogoUrl = player.currentClub.logoUrl;
    this.birthDate = player.birthDate;
    this.age =
      new Date().getFullYear() - new Date(player.birthDate).getFullYear();
    this.averageRating = averageRating;
  }
}

export class ExtendedPlayerVm extends PlayerVm {
  flagUrl?: string;
  height?: number;
  weight?: number;
  birthPlace: string;

  constructor(player: Player) {
    super(player);
    this.flagUrl = player.country.flagUrl ?? "#";
    this.height = player.height;
    this.weight = player.weight;
    this.birthPlace = player.birthPlace.name ?? "N/A";
  }
}
