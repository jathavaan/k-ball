# K-Ball

K-Ball is a web application where football enthusiasts users can view and rate players in the Korean football league.
With almost **500 players** from **15+ countries**, there are plenty of stats available retrieved
from [Football-API](https://www.api-football.com/).

> ### **See the project here**: [K-Ball](http://it2810-25.idi.ntnu.no/project2/)
> Make sure you are connected to the NTNU network<br>
> Other important links:
> - [API documentation](http://it2810-25.idi.ntnu.no:3001/docs)
> - [ER-diagram](https://dbdiagram.io/d/K-Ball-ER-diagram-670626effb079c7ebdd50bbd)
> - [Developer guide](./docs/README4DEVS.md)

---
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
  The application is fully responsive, providing an optimized experience across all screen sizes and devices.
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

There are three possible configurations when running the application locally:

| Frontend | Backend | Database |
|:--------:|:-------:|:--------:|
|  Local   | Server  |  Server  |
|  Local   |  Local  |  Server  |
|  Local   |  Local  |  Local   |

The app will run using the first configuration when cloning the repo. Check
out [the developer guide](./docs/README4DEVS.md) to modify the configuration.

> ⚠️ **Requirements:**
> - Node version: `22.5.x` or higher
> - Package manager: `npm`

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

### Forming a plan

The team held several brainstorming sessions to decide on a project idea. Our goal was to create something meaningful to
us while standing out as unique. Being based in South Korea and sharing a deep passion for football, the concept of
**K-Ball** quickly became an obvious choice.

Initially, we evaluated the technical expertise of each team member to assign roles effectively. Then we explored potential data sources and determined the specific types of data and statistics to feature in the app. Lastly, we developed a structured plan for our meetings and developed a collaborative strategy to achieve our project deliverables.

### Football API 
For the project, we utilized [Football-API](https://www.api-football.com/) to retrieve data about K-League, the top-tier football league in South Korea. The entire team is currently on exchange in South Korea, and we wanted to create something inspired by the country. Additionally, the API provided a wealth of data that allowed us to build various functionalities around it, and its free, unlimited access made it a reasonable choice of API. Unfortunately, access restrictions to the API changed during the semester. To ensure we could complete planned functionality without paying for additional access, we had to hardcode player statistics into the database. This work is further explained in the [Limitations](#limitations) section of the documentation. 

### Learning new technologies

At the beginning of the project, we dedicated significant time to familiarizing ourselves with new technologies,
exploring how to leverage them effectively while avoiding potential pitfalls. Each team member worked on their own
codebase, experimenting with various approaches and ideas.

### **Project Management**

Early in the project, we established a structured approach to manage our tasks and collaborations effectively. We utilized **GitHub Issues** and the **GitHub Project Board** to coordinate efforts and maintain a clear overview of our progress. We also scheduled two weekly meetings to discuss progress, address challenges, and plan further development.


## Technologies & Tools

### **Frontend**

The application was written in **React** with **TypeScript**, using **Vite** as the build tool for a fast and efficient
development experience. The design system was built on **Material-UI (MUI)**, providing a consistent and visually
appealing user interface. Using MUI also allowed us to save time and reduce the workload while ensuring quality and
consistency when building large and complex components.

### **Backend**

The backend is powered by an **Express** server, hosting a **GraphQL API** built with **Apollo**. This combination
ensures a flexible and efficient way to query and interact with the application’s data.

### **Database**

We used **PostgreSQL** as the database for storing and managing structured data, chosen for its reliability and robust
relational capabilities.

### **Testing**

To maintain code reliability and stability, we used **Vitest** for comprehensive and fast testing during development.

### **Development Tools**

To ensure a clean and maintainable codebase, we implemented:

- **Prettier**: For consistent code formatting.
- **ESLint**: For identifying and fixing code quality issues.
- **Husky**: To automate pre-commit and pre-push hooks, running format checks and tests.

### **Project Management**

The team effectively managed tasks and collaborated using **GitHub Issues** and the **GitHub Project Board**, enabling
an efficient development workflow.

## Architecture

We used a considerable amount of time on deciding the architecture before beginning the development of this project. One
of the main concerns was to underestimate how large project actually could become. Considering our ambitions for the
project and a goal to make a scalable codebase as possible we decided on architecture in both frontend and backend.

### Frontend

We have chosen a feature-driven folder structure inspired
by [this article](https://profy.dev/article/react-folder-structure). By dividing the codebase into folders based on
features in the application it is clear on where a developer can find files. A bug related to the searchbar will most
likely be in the searchbar-feature. This type of structure also allows us to efficiently re-use components and ensure a
streamlined design.

Features often needed code for custom styling, custom hooks, state management, api calls, and API state management. With
so many different layers in a feature, the risk of the code getting cluttered and coupled was high. This was avoided by
following the single responsibility principle (SRP) and splitting each feature into different files following a naming
convention decided by the team:

| File Ending   | Responsibility                                        |
|:--------------|:------------------------------------------------------|
| `*.api.ts`    | API-calls to the backend                              |
| `*.query.ts`  | API state management with TanStackQuery               |
| `*.slice.ts`. | State management with Redux                           |
| `*.hooks.ts`  | Custom hooks                                          |
| `*.style.ts`  | Feature specific styled components                    |
| `*.types`     | Types related toe the feature                         |
| `*.tsx`       | React component wich is exported and used on the site |
| `*.test.tsx`  | Test file containing snapshot and unit tests          |

`*` is the feature name.

A structure like this makes the frontend scalable, testable and easy to read.

### Backend

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

## Football API

For the project, we utilized [Football-API](https://www.api-football.com/) to retrieve data about K-League, the top-tier
football league in South Korea. The entire team is currently on exchange in South Korea, and we wanted to create
something inspired by the country. Additionally, the API provided a wealth of data that allowed us to build various
functionalities around it, and its free, unlimited access made it a reasonable choice of API. Unfortunately, access
restrictions to the API changed during the semester. To ensure we could complete planned functionality without paying
for additional access, we had to hardcode player statistics into the database. This work is further explained in the *
*Limitations** section of the documentation.

## Limitations

One of the limitations we encountered during the project was the need to hardcode player statistics into the database.
Midway throught the project period, the API we were using changed its free subscription rules. Initially, the API
provided access to statistics for all players, but this was later restricted to only 3 out of 27 player pages in the
K-League.

To work around this limitation without incurring personal expenses to pay for extended API access, we created a script
to generate statistics for all players in the database. The generated data was designed to be as realistic as possible
and factors such as player position were considered. This approach allowed us to complete the functionality we had
already built support for, ensuring the application remained functional despite the unexpected API restrictions.

Since we are based in South Korea and the server is hosted in Norway, all development and testing involved making API
calls across a significant geographical distance. This might result in slower API response times for us compared to
users closer to the server. As a result, it has been challenging to fully test the application's actual speed and
performance. 
