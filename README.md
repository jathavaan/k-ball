﻿# K-Ball

K-Ball is a web application where football enthusiasts users can view and rate players in the Korean football league.
With almost **500 players** from **15+ countries**, there are plenty of stats available retrieved
from [Football-API](https://www.api-football.com/).

> ### **See the project here**: [K-Ball](http://it2810-25.idi.ntnu.no/project2/)
>
> Make sure you are connected to the NTNU network<br>
> Other important links:
>
> - [API documentation](http://it2810-25.idi.ntnu.no:3001/docs)
> - [ER-diagram](https://dbdiagram.io/d/K-Ball-ER-diagram-670626effb079c7ebdd50bbd)
> - [Frontend guide](./docs/README_FRONTEND.md)
> - [Backend guide](./docs/README_BACKEND.md)

> ❗**Important**:<br>
> The source code can be found on the virtual machine in the following directory:
> `/home/jathavas/code/T25-Project-2`
 
---
## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Sustainable Web Design](#sustainable-web-design)
- [From Concept to Execution: The K-Ball Project](#from-concept-to-execution-the-k-ball-project)
- [Technologies & Tools](#technologies--tools)
- [Architecture](#architecture)
- [Limitations](#limitations)
- [Testing](#testing)
  
## Features

### **Exploration**

Explore the players in the Korean football league, K-League. These features are designed to ensure a user-friendly,
engaging, and targeted experience.

- **Search:**
  Users can search for players by name. The search is performed dynamically with debouncing. Feedback on the number of
  matches is displayed, and the search can be easily cleared and reset.
- **Filter:**
  Users can filter players by clubs, nationality and posistion. Filters are only applied when explicitly triggered by
  the user, ensuring full control over the experience. Feedback on the number of matches is provided, and filters can be
  easily reset.
- **Sort:**
  Players can be sorted alphabetically in ascending (A-Z) or descending (Z-A) order.

### **Details About Players**

View detailed information about each player by clicking on a player card from the dashboard. The player profile page
includes:

- **Player Statistics** from the seasons they have played in the K-League
- **Personal Information** about the player
- **Player Rating:** An average rating from all users. If you have rated the player, your personal rating will also be
  displayed
- **Threads:** Discussion and comments related to the player.

### **My Profile**

- **Authentication**:
  Users can easily log in or sign up with clear feedback on input requirements. Upon successful sign-up, users are
  automatically logged in for a seamless experience.
- **Post Threads:**
  Users can create new threads on player pages or reply to existing threads. Threads can also be deleted, offering full
  control over user contributions.
- **Rate Players:**
  Users can rate players on various metrics, update existing ratings, or delete them entirely.
- **Profile Information:**
  Personal information and submitted ratings are accessible via the sidebar. Ratings can also be navigated directly from
  the sidebar, making it easy to manage user activity.

### **Other Features**

- **Infinite Scroll:**
  The player dashboard supports infinite scrolling for effortless exploration, with a "Scroll to Top" button for quick
  navigation.
- **Responsive Design:**
  The application is responsive, providing an optimized experience across multiple screen sizes and devices.
- **Keyboard Navigation:**
  All interactive elements should be tabable, allowing users to navigate the application using only keyboard controls.

### **Further Improvements**

If we were to continue with the project, these are the features and improvements we consider as natural next steps and
priorities:

- **Thread Activity Overview:**
  Adding functionality to allow users to view their thread activity via the side menu, similar to how ratings are
  displayed. This would give users an easy way to track and revisit their contributions, enhancing the overall user
  experience.
- **Reply Notifications:**
  Implementing a notification system to alert users when they receive replies to their threads. In a full-scale
  application with a large user base, this feature would be particularly valuable, as users would likely receive
  numerous replies to their posts.
- **Additional Sorting Options:**
  Expanding the sorting functionality to include options such as sorting by rating. Since the rating functionality was
  introduced relatively late in the development process, we did not have time to implement it as a sorting criterion.
  However, the backend already supports this feature, as each player in the database has an overall rating that updates
  dynamically whenever users add or modify their ratings.
- **Improved Filter Logic:**
  Making filter options unavailable if they result in no matches, preventing users from applying invalid filters. While
  the current implementation provides feedback by showing the count of matches for a given filter, disabling invalid
  filters would improve usability. However, the current solution reduces API calls compared to dynamically disabling
  filter options. This makes it a reasonable trade-off from a sustainability perspective.

## Getting started

When you launch the application, you will be prompted to log in or sign up if it is your first visit.

To facilitate testing and exploration, we have provided a pre-configured user account:

### User Information:

**Email:** `kim@email.com`  
**Password:** `kim`

Using this account, you can experience the application as a user who has actively interacted with **K-Ball's** features.
This includes:

- Submitting player ratings
- Participating in player-related discussions through threads and comments

Kim, like the developers, is a big fan of the team **Ulsan Hyundai FC**, so maybe check out their players. Feel free to
explore the site as Kim and see how the app enhances the fan experience!

### Application Configurations

There are three possible configurations when running the application locally:

| Frontend | Backend | Database |
|:--------:|:-------:|:--------:|
|  Local   | Server  |  Server  |
|  Local   |  Local  |  Server  |
|  Local   |  Local  |  Local   |

The app will run using the first configuration when cloning the repo. Check
out [Backend guide](./docs/README_BACKEND.md) to modify the configuration.
The app will run using the first configuration when cloning the repo.

> ⚠️ **Requirements:**
>
> - Node version: `22.5.x` or higher
> - Package manager: `npm`

### Setting Up the Application

The repo consists of two different node projects: one for the `frontend` and one for the `backend`. Navigate to
the `frontend` folder to be able to install the dependencies.

```powershell
cd src/frontend
npm i
```

Now that the required dependencies have been installed, the frontend can be run. However, ensure that you are connected
to the NTNU network as all API-calls are done to the backend running on server:

```powershell
npm run dev
```

### Switching to a Local Backend

If you would like the frontend to connect to a locally running backend, update the uri in the `api.client.ts` file.
Which can be found [here](src/frontend/src/shared/api.client.ts).

Change the uri from:

```Typescript
uri: "http://it2810-25.idi.ntnu.no:3001/graphql"
```

to:

```Typescript
uri: "http://localhost:3001/graphql".
```

Make sure your backend is running locally on the specified port before applying this change. A guide on how to run a
local backend is provided [here](./docs/README_BACKEND.md/#backend).

## Sustainable Web Design

The team has taken several steps to ensure both a sustainable product and a sustainable development process. For
instance, we have utilized **WEBP files** wherever possible and implemented **client-side caching** to minimize
unnecessary API calls. This caching is enabled by default for all API requests and is only disabled when absolutely
necessary. As a result, we observed a significant reduction in server calls. Additionally, we blocked filters that would
yield no results and implemented **debouncing** in the search functionality to improve performance.

In the application, when navigating back to the player dashboard after submitting a player rating, the rating text on
the player cards does not update unless the page is refreshed. This decision was made to reduce the number of API calls.
In a hypothetical scenario where the application operates at full scale with a large user base, hundreds of user ratings
might be submitted for each player. In such cases, a single new or updated rating would have minimal impact on the
overall rating, and the text would likely to remain unchanged if it was updated. Given this, we concluded that not
immediately render the player cards when navigating back was a reasonable and sustainable choice to optimize resource
usage while maintaining functionality.

Accessibility has been a key focus for the team. The site is fully navigable via keyboard shortcuts, allowing users
to **tab through all interactive elements**. Moreover, we worked on providing clear feedback to users through validation
in both the frontend and backend, as well as implementing **clear and informative error messages**.

Despite our efforts to ensure 100% accessibility across the site, we fell short on one page. We suspect there is a bug
in how the **MUI styled API** handles a `Select` component with **multi-select** enabled. This issue has
prevented us from achieving an accessibility score of 100% in Google Lighthouse.

In the backend, we utilize **TypeORM** to model the database using a **code-first approach**. This allows us to make
changes quickly without the extensive manual effort often required with a database-first approach. Using TypeORM's
tools, such as `select`, we ensure that only the strictly necessary data is fetched from the database. This optimization
minimizes data retrieval from the database to the frontend, significantly improving efficiency.

The team have utilized design patterns such as dependency injection and singleton-pattern to ensure that that only one
instance of each service is initialized at runtime. Choices like this have reduced resource consumption in the backend,
which results in lower energy consumption. Early return pattern have also been used to reduce the number of database
operations.

Furthermore, the group has invested considerable time in designing a scalable architecture built on well-maintained
frameworks with long-term support. Developing a **design system**
has also been a priority, enabling us to reuse components and reduce redundant work, thereby increasing overall
development efficiency.

## From Concept to Execution: The K-Ball Project

### Forming a Plan

The team held several brainstorming sessions to decide on a project idea. Our goal was to create something meaningful to
us while standing out as unique. Being based in South Korea and sharing a deep passion for football, the concept of
**K-Ball** quickly became an obvious choice.

Initially, we evaluated the technical expertise of each team member to assign roles effectively. Then we explored
potential data sources and determined the specific types of data and statistics to feature in the app. Lastly, we
developed a structured plan for our meetings and developed a collaborative strategy to achieve our project deliverables.

### Football API

For the project, we utilized [Football-API](https://www.api-football.com/) to retrieve data about K-League, the top-tier
football league in South Korea. The entire team is currently on exchange in South Korea, and we wanted to create
something inspired by the country. Additionally, the API provided a wealth of data that allowed us to build various
functionalities around it, and its free, unlimited access made it a reasonable choice of API. Unfortunately, access
restrictions to the API changed during the semester. To ensure we could complete planned functionality without paying
for additional access, we had to hardcode player statistics into the database. This work is further explained in
the [Limitations](#limitations) section of the documentation.

### Learning New Technologies

At the beginning of the project, we dedicated significant time to familiarizing ourselves with new technologies,
exploring how to leverage them effectively while avoiding potential pitfalls. Each team member worked on their own
codebase, experimenting with various approaches and ideas.

### **Project Management**

Early in the project, we established a structured approach to manage our tasks and collaborations effectively. We
utilized **GitHub Issues** and the **GitHub Project Board** to coordinate efforts and maintain a clear overview of our
progress. We also scheduled two weekly meetings to discuss progress, address challenges, and plan further development.

## Technologies & Tools

### **Frontend**

The application was written in **React** with **TypeScript**, using **Vite** as the build tool for a fast and efficient
development experience. The design system was built on **Material-UI (MUI)**, providing a consistent and visually
appealing user interface. MUI's pre-designed components also allowed us to save time and reduce the workload while
ensuring quality and consistency when building large and complex components.

For state management, we utilized **Redux**. Key benefits include:

- **Global State Synchronization:** Ensuring consistent state updates across components

- **Scalability:** By structuring state management with slices, we’ve made it easier to scale the application as more
  features are added.

- **Developer Experience:** The Redux DevTools extension simplifies tracking state changes and debugging.

We integrated **Apollo Client** for handling **GraphQL** queries and caching, enabling seamless interactions with the
backend and reducing redundant network requests. Additionally, **TanStack Query** was used for its powerful
data-fetching capabilities, including caching, real-time updates, and optimized re-renders.

### **Backend**

The backend is powered by an **Express** server, hosting a **GraphQL API** built with **Apollo**. This combination
ensures a flexible and efficient way to query and interact with the application’s data.

We use **TypeORM** with the **code-first approach**, where the database schema is generated directly from TypeScript
classes. This approach simplifies schema management, ensures consistency between the database and codebase, and allows
for seamless migrations and updates as the application evolves.

### **Database**

We chose **PostgreSQL** as our database due to its ability to handle the structured and interconnected nature of our
data. Its support for relationships, data integrity through constraints, and efficient querying of linked data (e.g.,
players, users, and reviews) makes it ideal for our application’s relational model. Additionally, PostgreSQL was
straightforward to set up on our server, allowing us to quickly deploy and manage the database.

### **Development Tools**

To ensure a clean and maintainable codebase, we implemented:

- **Prettier**: For consistent code formatting.
- **ESLint**: For identifying and fixing code quality issues.
- **Husky**: To automate pre-commit and pre-push hooks, running format checks and tests.

### Further Reading

For a deeper dive into the technical details and implementation specifics of our application, refer to the following
guides:

- [Frontend Guide](./docs/README_FRONTEND.md)
- [Backend Guide](./docs/README_BACKEND.md)

## Architecture

We used a considerable amount of time on deciding the architecture before beginning the development of this project. One
of the main concerns was to underestimate how large project actually could become. Considering our ambitions for the
project and a goal to make a scalable codebase as possible we decided on architecture in both frontend and backend.

### Frontend Architecture 

We have chosen a feature-driven folder structure inspired
by [this article](https://profy.dev/article/react-folder-structure). By dividing the codebase into folders based on
features in the application it is clear on where a developer can find files. A bug related to the searchbar will most
likely be in the searchbar-feature. This type of structure also allows us to efficiently re-use components and ensure a
streamlined design.

Features often needed code for custom styling, custom hooks, state management, api calls, and API state management. With
so many different layers in a feature, the risk of the code getting cluttered and coupled was high. This was avoided by
following the single responsibility principle (SRP) and splitting each feature into different files following a naming
convention decided by the team:

| File Ending   | Responsibility                                         |
|:--------------|:-------------------------------------------------------|
| `*.api.ts`    | API-calls to the backend                               |
| `*.query.ts`  | API state management with TanStackQuery                |
| `*.slice.ts`. | State management with Redux                            |
| `*.hooks.ts`  | Custom hooks                                           |
| `*.style.ts`  | Feature specific styled components                     |
| `*.types`     | Types related to the feature                           |
| `*.tsx`       | React component which is exported and used on the site |
| `*.test.tsx`  | Test file containing snapshot and unit tests           |

`*` is the feature name.

A structure like this makes the frontend scalable, testable and easy to read.

### Backend Architecture 

The backend is designed after Clean Architecture principles with command query responsibility segregation (CQRS) and is
split into different layers:

<div align="center">
  <img src="./docs/images/clean-architecture.png" alt="Alt text" width="500">
</div>

The **domain layer** contains the definition of entities in the database. This layer is not dependent on any outer
layers and form the core of our application.

**Application layer** consists of handlers for each endpoint, contracts for each service and middleware. By doing so the
business logic is abstracted away to the infrastructure layer. The code is not dependent on the implementation of the
business logic, but rather the concepts of what should be the input and output of each method. This makes it easier to
individually test and mock, expand and refactor functionality. The implementation of each contract is abstracted away to
the **infrastructure layer**.

The **presentation layer** contains all definitions of schemas and exposes the application to the internet. The query
and mutation resolvers use handlers defined in the application layer which results in resolvers with minimal logic.

**CQRS** is used to ensure that operations like fetching data stays as fast as possible and to avoid adding unnecessary
database write operations. This is also helps to understand the purpose of the code at a quick glance.

The NPM package `inversify` is used to implement dependency injection (DI). By initializing services in a common
container shared across the backend and then injecting them in individual services, handlers and resolvers reduces any
unnecessary memory usage, this design pattern is also called **singleton-pattern**.

## Limitations

One of the challenges we encountered during the project was the need to generate player statistics into the database.
Midway throught the project period, the API we were using changed its free subscription rules. Initially, the API
provided access to statistics for all players, but this was later restricted to only 3 out of 27 player pages in the
K-League. To work around this limitation without incurring personal expenses to pay for extended API access, we created
a script
to generate statistics for all players in the database. The generated data was designed to be as realistic as possible
and factors such as player position were considered. This approach allowed us to complete the functionality we had
already built support for, ensuring the application remained functional despite the unexpected API restrictions.

Since we are based in South Korea and the server is hosted in Norway, all development and testing involved making API
calls across a significant geographical distance. This might result in slower API response times for us compared to
users closer to the server. As a result, it has been challenging to fully test the application's actual speed and
performance.

## Testing

Our application underwent extensive testing across both the frontend and backend, with over **90 tests** implemented.

### Frontend Testing

#### Component Test Description

To maintain code reliability and stability, we used Vitest for comprehensive and fast testing during development. We
utilized component testing to validate the behavior, rendering, and interactions of UI components in isolation, ensuring
they function as intended under various conditions with relevant data **mocked**. Additionally, we used snapshot testing
to capture and verify the visual structure of components, detecting unintended UI changes during development.

Our tests provide extensive coverage across multiple components, with a total of 52 component tests.

#### End-to-End (E2E) Test Description

Our E2E tests ensure that key user workflows in the application are fully functional. For these tests, we use
**Cypress**, a cutting-edge tool specifically designed for modern web applications. **Cypress** allows us to thoroughly
simulate
realistic user interactions across various components of the application. It also features an interactive testing
environment, which is really useful. We have used Google Chrome when simulating the E2E tests in a browser.

Here's a summary of the degree of coverage our tests provide:

- **High Priority Features:** Core features such as "infinite" scrolling, search, sorting, player ratings, and threads
  are thoroughly tested. These workflows represent critical paths that users engage with frequently.

- **User Authentication:** Login functionality is tested to ensure users can access restricted areas of the application.

- **Dynamic Interactions:** Tests cover UI elements that dynamically update based on user actions, such as search
  results, sorting, scrolling, adding ratings, and threads with replies.

#### Running Tests

To learn how to run the tests for the frontend, refer to the [Frontend guide](./docs/README_FRONTEND.md)

### Backend testing

There have been written both unit and integration tests in the backend using the `jest` library. The team focused on
writing unit tests that covered different cases in the application and to ensure that changes would not break the
expected logic. This could be anything from only returning countries with players related to them to ensuring that the
output is alphabetically sorted.

The integration tests aim to test the behaviour when an API-endpoint is called. These check that the expected outputs
are return with different API-parameters as well as checking if the validation is triggered when invalid input is
provided. We aimed to cover both happy and unhappy path test scenarios.

An important aspect of the backend testing was mocking both the database and external libraries. The database is mocked,
seeded and run in-memory when running the tests. This ensures that the data provided in the test cases are the same for
each test. External libraries such as `bcrypt` was mocked using `jest` mocking.

### Testing improvements

Throughout development, we implemented simple component tests alongside the creation of new components and features,
ensuring their behavior and rendering were validated early on. As the application grew in complexity, our focus shifted
to end-to-end (E2E) tests that simulate core user workflows.

However, we could improve by adding more integration tests to further check how components, Redux state, and GraphQL
APIs work together. Using more advanced mocks for these dependencies would make the tests more reliable and thorough.
This was the next step in the frontend testing.

One weakness with the backend integration tests is that they skip the actual network layer. This is due to limited time
and
complexity of the setup. However, the handlers were tested, and considering that they are, in our codebase, more or less
equivalent with the API-endpoints defined in the schema the team felt that this was a sufficient solution.
