# Backend

Assumes location is `src/backend`

## Database

### Setup

> **Note:** The database setup is for a local database. The database is up and running on the NTNU server.

Install the latest PostgreSQL version from the [official website](https://www.postgresql.org/download/). Ensure that the
default port is set to `5432` when setting up PostgresSQL. You may now create a database locally named `k-ball-db` using the instructions here [PostgreSQL documentation](https://www.postgresql.org/docs/current/tutorial-createdb.html). Then set the following credentials:

- Owner: `postgres`
- Username: `postgres`
- Password: `postgres`

If you want the backend to connect to the local database, navigate to `src\config.ts` and update the **DB_HOST** configuration as follows:

```Typescript
DB_HOST: "localhost"
```

### Run Backend to Populate Database

Make sure you are in `src/backend` and run the following command to start the backend server:

```powershell
npm run dev
```

This command will start the backend server, create the necessary database tables, and import player data from the [Football-API](https://www.api-football.com/).

> ⚠️**Note:** Due to recent data access restrictions from the API service, the database will only be populated with 3 out of 27 pages of player data. This results in approximately 60 players, as outlined in the [main README](../README.md).

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
SELECT * FROM public."user";
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
