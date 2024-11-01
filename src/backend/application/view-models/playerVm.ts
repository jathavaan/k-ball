import { Player } from "../../domain/entities";

export class PlayerVm {
  id: number;
  fullName: string;
  currentClub: string;
  imageUrl: string;
  position: string;
  nationality: string;
  age: number;

  constructor(player: Player) {
    console.log(JSON.stringify(player, null, 2));
    this.id = player.id;
    this.fullName = player.fullName;
    this.currentClub = player.currentClub.name;
    this.imageUrl = player.imageUrl;
    this.position = player.position.name;
    this.nationality = player.birthPlace.country.name;
    this.age =
      new Date().getFullYear() - new Date(player.birthDate).getFullYear();
  }
}

export class ExtendedPlayerVm extends PlayerVm {
  clubLogo: string;
  flagUrl?: string;
  birthDate: Date;
  height?: number;
  weight?: number;
  birthPlace: string;

  constructor(player: Player) {
    super(player);
    this.clubLogo = player.currentClub.logoUrl;
    this.flagUrl = player.birthPlace.country.flagUrl;
    this.birthDate = player.birthDate;
    this.height = player.height;
    this.weight = player.weight;
    this.birthPlace = player.birthPlace.name || "N/A";
  }
}
