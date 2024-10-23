# K-Ball

## Description

K-Ball is a website that shows player statistics for players in K-League. A user can log in and leave ratings on each
player as well as see the player statistics. The data is based on [API-Football](https://www.api-football.com/) and is
based on the 2022 season.

## Technologies

The website is built using React, Node.js, GraphQL and PostgreSQL. The website is hosted on the NTNU server and requires
a NTNU VPN connection to access. Husky is used for pre-commit and pre-push hooks, and Vitest and Cypress are used for
testing.

## Husky

The following have been set up for pre-commit and pre-push hooks (in the `frontend` folder):

- `pre-commit`: Formatting with Prettier
- `pre-push`: Running tests with Vitest and Cypress

## Architecture

The root directory contains the following folders:

- `.github` which contains issues and pull requests templates, and workflows for the project.
- `src` which contains the frontend and backend code. The code is split into two folders, `frontend` and `backend`.

### Backend

The backend is built using Node.js and GraphQL with a PostgreSQL database. The database is created in a code-first
approach using TypeORM. In the backend is structured according to Clean Architecture with
command-query-responsibility-segregation (CQRS). The backend is split into the following layers:

- `domain` which contains the entities and value objects of the application.
- `application` which contains the use cases of the application. Contracts for services are also defined here.
- `infrastructure` which contains the implementation of the interfaces defined in the application layer, as well as the
  connection to the database.
- `presentation` which contains the GraphQL schema and resolvers.

### Frontend

The frontend follows a feature based architecture as proposed in
this [article](https://profy.dev/article/react-folder-structure). The code can be sorted into the
folders `features`, `pages`and `shared`. Content in the `shared`-folder will be code that can be used across multiple
features. The `pages`-folder will contain the main pages of the website, while the `features`-folder will contain the
smaller components that make up the pages. In the directory `feature/ui` there are componets that are part of the design
system and have no business logic attached to them.

## Installation

There are three main parts to the installation process: setting up the database, setting up the backend and setting up
the frontend.

### Database

> **Note:** The database setup is for a local database. When the database is up and running on the NTNU server, the
> installation is not needed.

Install the latest PostgreSQL version from the [official website](https://www.postgresql.org/download/). Ensure that the
default port is set to `5432` when setting up PostgresSQL. You may now create a database locally named `k-ball-db` which
will have the `postgres`as the owner, username and password.

### Backend

To set up the backend, navigate to the `src/backend` directory and run the following commands:

```powershell
npm i
```

### Frontend

From the root directory, navigate to the `src/frontend` directory and run the following commands:

```powershell
npm i
```

This will install all the necessary dependencies for the frontend.

## Usage

Navigate to `src/backend` and run the following command to start the backend server:

```powershell
npm run dev
```

The command above will create the database tables and start the backend server
on [`http://localhost:4000/graphql`](http://localhost:4000/graphql). To start the frontend, navigate to
the `src/frontend` directory and run the following command:

```powershell
npm run dev
```

and to run the tests for the frontend, run the following command:

```powershell
npm run test
```

or to view the tests in the Vitest UI, run the following command:

```powershell
npm run test:ui
```

To run the Cypress End-to-End (E2E) tests, use the following commands:

To open the Cypress Test Runner UI: This will launch the Cypress graphical interface where you can run and observe E2E
tests interactively.

```powershell
npm run cy:open
```

To run all Cypress E2E tests in headless mode: This will run the E2E tests in the terminal without opening the Cypress
UI.

```powershell
npm run cy:run
```

Make sure that the development server is running (npm start) before executing Cypress E2E tests, as they require the
frontend to be live.

## Further documentation

The API have been documented using GraphQL Playground. To access the documentation, navigate
to [`http://localhost:4000/docs`](http://localhost:4000/docs) and click on the `DOCS` tab in the top right corner.

## Accessing the Database via Terminal

To access the PostgreSQL database on the server for K-Ball, follow these steps:

Connect to the Server:

Ensure that you have VPN access to NTNU if you are connecting remotely. Once connected, use SSH to log in to the server:

```powershell
ssh username@it2810-25.idi.ntnu.no
```

Replace username with your actual username. You will be prompted to enter your password.

Access the PostgreSQL Database:

Once logged into the server, switch to the postgres user and access the PostgreSQL interface by running the following command:

```powershell
sudo -u postgres psql
```

You may be prompted to enter your password again.

Switch to the Correct Database:

Once in the PostgreSQL interface, list all databases to ensure k-ball-db is available:

```sql
\l
```

Then, connect to the k-ball-db database:

```sql
\c k-ball-db
````

You should see a message like this:

```powershell
You are now connected to database "k-ball-db" as user "postgres".
```

Query the Database:

Once connected, you can run SQL queries. For example, to see all users:

```sql
SELECT * FROM public."user";
````

List Tables:

If you want to list all tables in the current database:

```sql
\dt
```

Exit the Database:

When finished, you can exit the PostgreSQL interface by typing:

```powershell
\q
```

Exit the Server:

To disconnect from the server, type:

```powershell
exit
```