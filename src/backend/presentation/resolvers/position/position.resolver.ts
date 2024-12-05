import {
  GetPositionsQuery,
  GetPositionsQueryHandler,
} from "../../../application/features/position/query";
import { container } from "../../../infrastructure/services/inversify.config";

const getPositionsQueryHandler = container.get(GetPositionsQueryHandler);
export const positionResolver = {
  PositionQuery: {
    positions: async () =>
      await getPositionsQueryHandler.handle(new GetPositionsQuery()),
  },
};
