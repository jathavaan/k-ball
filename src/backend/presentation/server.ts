import express from "express";
import "reflect-metadata";
import { createHandler } from "graphql-http/lib/use/express";
import expressPlayground from "graphql-playground-middleware-express";
import { KBallDbContext } from "../infrastructure/persistence/dataSource";
import { schema } from "./resolvers/graphQlSchema";
import cors from "cors";
import { config } from "../config";
import { container } from "../infrastructure/services/inversify.config";
import { DatabaseImportServiceBase } from "../application/contracts";
import { PlayerImportStateRepositoryServiceBase } from "../application/contracts/playerImportStateRepository.service.base";

// Initialize the database connection
const databaseImportService = container.get<DatabaseImportServiceBase>(
  "DatabaseImportServiceBase",
);

const playerImportStateService =
  container.get<PlayerImportStateRepositoryServiceBase>(
    "PlayerImportStateRepositoryServiceBase",
  );

KBallDbContext.initialize()
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
