import {
  GetPositionsQuery,
  GetPositionsQueryHandler,
} from "../../../application/features/position/query";

const getPositionsQueryHandler = new GetPositionsQueryHandler();
export const positionResolver = {
  PositionQuery: {
    positions: async () =>
      await getPositionsQueryHandler.handle(new GetPositionsQuery()),
  },
};
