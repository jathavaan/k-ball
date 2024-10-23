import {
  GetClubsQuery,
  GetClubsQueryHandler,
} from "@application/features/club/query";

const getClubsQueryHandler = new GetClubsQueryHandler();

export const clubResolver = {
  ClubQuery: {
    clubs: async () => await getClubsQueryHandler.handle(new GetClubsQuery()),
  },
};
