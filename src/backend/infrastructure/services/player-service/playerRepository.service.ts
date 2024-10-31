import { injectable } from "inversify";
import { KBallDbContext } from "../../persistence/dataSource";
import { Player } from "../../../domain/entities";
import { PlayerRepositoryServiceBase } from "../../../application/contracts";
import { Like, In } from "typeorm";

@injectable()
export class PlayerRepositoryService implements PlayerRepositoryServiceBase {
    dbContext = KBallDbContext.manager;

    async getPlayers(
        limit: number, 
        offset: number, 
        filters: { 
            search?: string; 
            clubIds?: number[]; 
            countryIds?: number[]; 
            positionIds?: number[]; 
        }
    ): Promise<{players: Player[], totalPlayers: number}> {
        const whereConditions: any = {};

        // Apply filters only if they are provided
        if (filters.search && filters.search.trim() !== "") {
            whereConditions.fullName = Like(`%${filters.search}%`);
            
        }
        if (filters.clubIds && filters.clubIds.length > 0) {
            whereConditions.currentClub = { id: In(filters.clubIds) };
        }
        if (filters.countryIds && filters.countryIds.length > 0) {
            whereConditions.birthPlace = { country: { id: In(filters.countryIds) } };
        }
        if (filters.positionIds && filters.positionIds.length > 0) {
            whereConditions.position = { id: In(filters.positionIds) };
        }

        // Get the total count of players that match the filters
        const totalPlayers = await this.dbContext.count(Player, {
            where: whereConditions,
            relations: ["currentClub", "birthPlace", "birthPlace.country", "position"]
        });

        // Get the paginated and filtered list of players
        const players = await this.dbContext.find(Player, {
            where: whereConditions,
            relations: ["currentClub", "birthPlace", "birthPlace.country", "position"],
            skip: offset,
            take: limit,
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
        });

        return { players, totalPlayers };
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
