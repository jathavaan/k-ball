export class CreatePlayerCommand {
    id: number;
    fullName: string;
    currentClub: string;
    imageUrl: string;
    position: string;
    nationality: string;
    age: number;
    clubLogo: string;
    flagUrl: string;
    birthDate: Date;
    height: number;
    weight: number;
    birthPlace: string;

    constructor(
        id: number,
        fullName: string,
        currentClub: string,
        imageUrl: string,
        position: string,
        nationality: string,
        age: number,
        clubLogo: string,
        flagUrl: string,
        birthDate: Date,
        height: number,
        weight: number,
        birthPlace: string,
        
    ) {
        this.id = id;
        this.fullName = fullName;
        this.currentClub = currentClub;
        this.imageUrl = imageUrl;
        this.position = position;
        this.nationality = nationality;
        this.age = age;
        this.clubLogo = clubLogo;
        this.flagUrl = flagUrl;
        this.birthDate = birthDate;
        this.height = height;
        this.weight = weight;
        this.birthPlace = birthPlace;
    }   
}