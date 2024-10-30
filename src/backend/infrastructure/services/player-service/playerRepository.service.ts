import { injectable } from "inversify";
import { KBallDbContext } from "../../persistence/dataSource";
import { Player } from "../../../domain/entities";
import { PlayerRepositoryServiceBase } from "../../../application/contracts";

@injectable()
export class PlayerRepositoryService implements PlayerRepositoryServiceBase {
    dbContext = KBallDbContext.manager;

    async getPlayers() {
        return await this.dbContext.find(Player, {
            select: {
                id: true,
                fullName: true,
                position: {
                    id: true,
                    name: true
                },
                imageUrl: true,
                birthDate: true,
                currentClub: {
                    id: true,
                    name: true,
                },
                birthPlace: {
                    id: true,
                    country: {
                        id: true,
                        name: true,
                    }
                }
            },
            relations: ["currentClub", "birthPlace", "birthPlace.country", "position"]
        });
    }

    async getPlayerById(id: number) {
        return await this.dbContext.findOne(Player, {
            select: {
                id: true,
                fullName: true,
                position: {
                    id: true,
                    name: true
                },
                imageUrl: true,
                birthDate: true,
                height: true,
                weight: true,
                currentClub: {
                    id: true,
                    name: true,
                    logoUrl: true
                },
                birthPlace: {
                    id: true,
                    name: true,
                    country: {
                        id: true,
                        name: true,
                        flagUrl: true
                    }
                }
            },
            where: {
                id: id
            },
            relations: ["currentClub", "birthPlace", "birthPlace.country", "position"]
        });
    }

    async addPlayer(player: Player) {
        await this.dbContext.save(Player, player);
    }

}