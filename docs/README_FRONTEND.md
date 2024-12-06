# Frontend

> This developer guide assumes that you are in the folder `src/frontend`

## Setup

To set up and run the frontend of this project, please follow these steps.  

1. Navigate to the frontend folder:

```bash
   cd src/frontend
   ```

2. Install the necessary packages:

```bash
   npm install
   ```
3. Now that the required dependencies are installed, you can run the frontend. Please make sure you are connected to the NTNU network, as all API calls are made to the backend running on the server:

```bash
   npm run dev
   ```

## Running frontend tests

Make sure you are in the frontend directory, then run the following commands in the terminal:

### Component tests

Run the unit tests:

```bash
   npm run test
   ```
### End-to-End tests

Run the E2E tests:

```bash
   npm run cy:run
   ```


