import {
  GetClubsQuery,
  GetClubsQueryHandler,
} from "../../../application/features/club/query";
import { container } from "../../../infrastructure/services/inversify.config";

const getClubsQueryHandler = container.get(GetClubsQueryHandler);

export const clubResolver = {
  ClubQuery: {
    clubs: async () => {
      const result = await getClubsQueryHandler.handle(new GetClubsQuery());
      return result;
    },
  },
};
