import { GraphQLError } from "graphql/error";

export const errorHandlingMiddleware = (
  err: Readonly<Error | GraphQLError>,
) => {
  if (err instanceof GraphQLError) {
    return new GraphQLError(err.message, {
      extensions: {
        ...err.extensions,
        statusCode: 400, // Custom status code for validation errors
      },
    });
  } else {
    return new GraphQLError("Internal server error", {
      extensions: { statusCode: 500 },
    });
  }
};
