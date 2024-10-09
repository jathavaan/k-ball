import express from "express";
import "reflect-metadata";
import { createHandler } from "graphql-http/lib/use/express";
import { KBallDbContext } from "@infrastructure/persistence/dataSource";
import { schema } from "@presentation/resolvers/graphQlSchema";

KBallDbContext.initialize()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => console.error(err));

const app = express();

app.all(
  "/graphql",
  createHandler({
    schema: schema,
  }),
);

app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
