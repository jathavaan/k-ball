﻿import express from "express";
import "reflect-metadata";
import { createHandler } from "graphql-http/lib/use/express";
import expressPlayground from "graphql-playground-middleware-express";
import { schema } from "./resolvers/graphQlSchema";
import cors from "cors";
import { config } from "../config";
import { container } from "../infrastructure/services/inversify.config";
import { errorHandlingMiddleware } from "../application/middleware/errorHandling.middleware";
import { loggingMiddleware } from "../application/middleware/logging.middleware";
import {
  DatabaseImportServiceBase,
  PlayerImportStateRepositoryServiceBase,
} from "../application/contracts";
import { DataSource } from "typeorm";

// Initialize the database connection
const dataSource = container.get<DataSource>("DataSource");
const databaseImportService = container.get<DatabaseImportServiceBase>(
  "DatabaseImportServiceBase",
);

const playerImportStateService =
  container.get<PlayerImportStateRepositoryServiceBase>(
    "PlayerImportStateRepositoryServiceBase",
  );

dataSource
  .initialize()
  .then(() => {
    console.log(
      `Connected to ${config.DB_NAME} at ${config.DB_HOST}:${config.DB_PORT}`,
    );
  })
  .then(async () => {
    const lastImport = await playerImportStateService.getPlayerImportState();
    if (lastImport) {
      console.log("Data have already been imported. Skipping...");
    } else {
      const isDatabasePopulated =
        await databaseImportService.populateDatabase();

      if (!isDatabasePopulated) {
        console.warn(
          "Something went wrong with player import. Please perform a manual check of database",
        );
      }

      await playerImportStateService.addPlayerImportState();
    }
  })
  .then(() => console.log("Database state is OK. Application can now be used"))
  .catch((err) => {
    console.error(`\nError: ${err.message}`);
    console.log("Ensure that you are connected to the NTNU VPN");
    return process.exit(0);
  });

// Create an express server and add the GraphQL endpoints
const app = express();
app.use(cors({ origin: "*" }));
app.use((req, res, next) => loggingMiddleware(req, res, next));
app.all(
  "/graphql",
  createHandler({
    schema: schema,
    formatError: (err) => errorHandlingMiddleware(err),
  }),
);

app.get("/docs", expressPlayground({ endpoint: "/graphql" }));
app.listen(3001, () => {
  console.log(
    "Running a GraphQL API server. View the docs at http://localhost:3001/docs",
  );
});

export { app };
