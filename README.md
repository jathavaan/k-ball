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

Accessibility has been a key focus for the team. The site is fully navigable via keyboard shortcuts, allowing users
to **tab through all interactive elements**. Moreover, we worked on providing clear feedback to users through validation
in both the frontend and backend, as well as implementing **clear and informative error messages**.

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
appealing user interface.

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

