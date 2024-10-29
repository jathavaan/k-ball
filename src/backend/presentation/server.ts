import express from "express";
import "reflect-metadata";
import { createHandler } from "graphql-http/lib/use/express";
import expressPlayground from "graphql-playground-middleware-express";
import { KBallDbContext } from "../infrastructure/persistence/dataSource";
import { schema } from "./resolvers/graphQlSchema";
import cors from "cors";
import { config } from "../config";

// Initialize the database connection
KBallDbContext.initialize()
  .then(() => {
    console.log(
      `Connected to ${config.DB_NAME} at ${config.DB_HOST}:${config.DB_PORT}`,
    );
  })
  .catch((err) => {
    console.error("Database connection failed");
    console.log("Ensure that you are connected to the NTNU VPN");
    console.error(err);
  });

// Create an express server and add the GraphQL endpoints
const app = express();
app.use(cors({ origin: "*" }));
app.all(
  "/graphql",
  createHandler({
    schema: schema,
  }),
);

app.get("/docs", expressPlayground({ endpoint: "/graphql" }));
app.listen(4000, () => {
  console.log(
    "Running a GraphQL API server. View the docs at http://localhost:4000/docs",
  );
});
