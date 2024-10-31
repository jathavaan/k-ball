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
            sortBy?: string;
            sortOrder?: string;
        }
    ): Promise<{playerCards: Player[], totalPlayers: number}> {
        const whereConditions: any = {};

        if (filters.clubIds && filters.clubIds.length > 0) {
            whereConditions.currentClub = { id: In(filters.clubIds) };
        }
        if (filters.countryIds && filters.countryIds.length > 0) {
            whereConditions.birthPlace = { country: { id: In(filters.countryIds) } };
        }
        if (filters.positionIds && filters.positionIds.length > 0) {
            whereConditions.position = { id: In(filters.positionIds) };
        }
        if (filters.search && filters.search.trim() !== "") {
            whereConditions.fullName = Like(`%${filters.search}%`);
        }

        const totalPlayers = await this.dbContext.count(Player, {
            where: whereConditions,
            relations: ["currentClub", "birthPlace", "birthPlace.country", "position"]
        });

        const sortField = filters.sortBy || 'fullName';
        const sortOrder = filters.sortOrder || 'DESC'; 

        const playerCards = await this.dbContext.find(Player, {
            where: whereConditions,
            relations: ["currentClub", "birthPlace", "birthPlace.country", "position"],
            skip: offset,
            take: limit,
            order: {
                [sortField]: sortOrder
            },
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

        return { playerCards, totalPlayers };
    }

    async getPlayerById(id: number) {
        const result = await this.dbContext.findOne(Player, {
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
        return result;
    }

    async addPlayer(player: Player) {
        await this.dbContext.save(Player, player);
    }
}
