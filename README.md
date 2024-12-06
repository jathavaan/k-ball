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

## Roadmap

### **Completed:**

✅ Dashboard displaying all players  
✅ Base for design system  
✅ Caching in frontend  
✅ Robust state management  
✅ Detailed player information page  
✅ Automated data import  
✅ Search bar and filters on dashboard  
✅ Hashing of sensitive information in database  
✅ Authentication and authorization  
✅ Rating system  
✅ "My profile" functionality
✅ "Threads" functionality


---

### **In Progress:**

🚧 Snapshot, unit, and E2E testing in frontend  
🚧 Unit and integration testing in backend

---

### **Requested Features:**

📝 Server side caching  
📝 Comment section  
📝 Create your own team  
📝 Chatbot

---

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

---

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

Furthermore, the group has invested considerable time in designing a scalable architecture built on well-maintained
frameworks with long-term support. Developing a **design system**
has also been a priority, enabling us to reuse components and reduce redundant work, thereby increasing overall
development efficiency.


---

## Development process

### Brainstorming

The team held several brainstorming sessions to decide on a project idea. Our goal was to create something meaningful to
us while standing out as unique. Being based in South Korea and sharing a deep passion for football, the concept of
**K-Ball** quickly became an obvious choice.

### Forming a plan

The first step we took was to assess the technical expertise within the team, which allowed us to assign roles
effectively. Next, we researched potential data sources and decided on the types of statistics we wanted to showcase in
the app. Finally, we developed a plan for meetings and outlined how we would work collaboratively toward our
deliverables.

### Learning new technologies

At the beginning of the project, we dedicated significant time to familiarizing ourselves with new technologies,
exploring how to leverage them effectively while avoiding potential pitfalls. Each team member worked on their own
codebase, experimenting with various approaches and ideas.

---

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
to generate statistics for all players in the database. The generated data was designed to be as realistic as possible,
considering factors such as player position. This approach allowed us to complete the functionality we had already built
support for, ensuring the application remained functional despite the unexpected API restrictions.
