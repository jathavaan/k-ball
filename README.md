# K-Ball

## Description

K-Ball is a website that shows player statistics for players in K-League. A user can log in and leave ratings on each
player as well as see the player statistics. The data is based on [API-Football](https://www.api-football.com/) and is
based on the 2022 season.

## Technologies

The website is built using React, Node.js, GraphQL and PostgreSQL. The website is hosted on the NTNU server and requires
a NTNU VPN connection to access.

## Architecture

The root directory contains the following folders:

- `.github` which contains issues and pull requests templates, and workflows for the project.
- `src` which contains the frontend and backend code. The code is split into two folders, `frontend` and `backend`.

### Backend

- In progress

### Frontend

The frontend follows a feature based architecture as proposed in
this [article](https://profy.dev/article/react-folder-structure). The code can be sorted into the
folders `features`, `pages`and `shared`. Content in the `shared`-folder will be code that can be used across multiple
features. The `pages`-folder will contain the main pages of the website, while the `features`-folder will contain the
smaller components that make up the pages. In the directory `feature/ui` there are componets that are part of the design
system and have no business logic attached to them.

## Installation
There are three main parts to the installation process: setting up the database, setting up the backend and setting up the frontend.

### Database
### Backend
### Frontend
From the root directory, navigate to the `src/frontend` directory and run the following commands:

```powershell
npm i
```

This will install all the necessary dependencies for the frontend.

## Usage
To start the frontend, navigate to the `src/frontend` directory and run the following command:

```powershell
npm start
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

To open the Cypress Test Runner UI: This will launch the Cypress graphical interface where you can run and observe E2E tests interactively.

```powershell
npm run cypress:open
```

To run all Cypress E2E tests in headless mode: This will run the E2E tests in the terminal without opening the Cypress UI.

```powershell
npm run cypress:run
```

Make sure that the development server is running (npm start) before executing Cypress E2E tests, as they require the frontend to be live.