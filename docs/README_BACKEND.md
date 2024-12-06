# Backend

> This developer guide assumes that you are in the folder `src/backend`

The backend is a GraphQL API developed using Apollo and runs on an express server. The API is hosted on the NTNU virtual
machine and requests go to [`it2810-25.idi.ntnu.no:3001/graphql`](http://it2810-25.idi.ntnu.no:3001/graphql).
The API docs can be viewed in the [GraphQL Playground](http://it2810-25.idi.ntnu.no:3001/docs).

> The backend runs on port `3001`

This developer guide will go through how you can set up and run the backend to run towards a local database and the
production database. Steps on how to run the tests are also provided in this guide.

## GraphQL API

### Installation

To install the dependencies run the following command:

```powershell
npm i
```

This will read `package.json` and install all dependencies provided.

### Running the backend with the database on server

This step is recommended if you want to use the production data. There is no need for any additional setup, just ensure
that you are connected to a NTNU network or VPN and run the following command:

```powershell
npm run dev
```

The expected output is:

```
> backend@1.0.0 dev
> npx tsx ./presentation/server.ts

Running a GraphQL API server. View the docs at http://localhost:3001/docs
Connected to k-ball-db at it2810-25.idi.ntnu.no:5432
Data have already been imported. Skipping...
Database state is OK. Application can now be used
```

When `Database state is OK. Applicaiton can now be used` is logged to the API is up and running.

### Running the Backend with a Local Database

> This requires that you have a PostgreSQL database running locally. Please read the docs on how
> to [set up the database locally](#setup)

The first thing that needs to be done is to change the database connection string. This is defined
in `config.ts` which can be found [here](../src/backend/config.ts). The `DB_HOST` variable should be changed as shown
below:

```Typescript
DB_HOST: "localhost"
```

This all required setup to run with a local database.

```powershell
npm run dev
```

This command will start the backend server, create the necessary database tables, and import player data from
the [Football-API](https://www.api-football.com/).

> ⚠️**Note:** Due to recent data access restrictions from the API service, the database will only be populated with 3
> out of 27 pages of player data. This results in approximately 60 players, as outlined in
> the [README](../README.md/#limitations).

## Database

### Setup

> **Note:** The database setup is for a local database. The database is up and running on the NTNU server.

Install the latest PostgreSQL version from the [official website](https://www.postgresql.org/download/). Ensure that the
default port is set to `5432` when setting up PostgresSQL. You may now create a database locally named `k-ball-db` using
the instructions here [PostgreSQL documentation](https://www.postgresql.org/docs/current/tutorial-createdb.html). Then
set the following credentials:

- Owner: `postgres`
- Username: `postgres`
- Password: `postgres`

### Accessing the Database via Terminal

We use `psql`, the PostgreSQL interactive terminal, for managing and querying the database.

To access the PostgreSQL database on the server for K-Ball, follow these steps:

1. **Connect to the Server:** Ensure VPN access to NTNU if connecting remotely, then log in via SSH:

```powershell
ssh username@it2810-25.idi.ntnu.no
```

2. **Access PostgreSQL:** Switch to the postgres user and open the PostgreSQL interface:

```powershell
sudo -u postgres psql
```

3. **Connect to the Database:** List available databases and connect to k-ball-db:

```sql
\l
\c k-ball-db
```

4. **Run Queries:** Execute SQL queries, such as:

```sql
SELECT * FROM player;
```

5. **Exit:** Leave the PostgreSQL interface:

When finished, you can exit the PostgreSQL interface by typing:

```powershell
\q
```

Disconnect from the Server:

```powershell
exit
```

## Running backend test

There are both unit and integration tests written in the backend. These can be run with the following command

```powershell
npm run test
```

Checkout the [README](../README.md) for more information about what the tests cover.