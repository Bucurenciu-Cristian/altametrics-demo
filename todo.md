
# Full Stack Node React Typescript Code Test

## Introduction

Thank you for taking the time to complete our code assessment. We appreciate your interest in the position and are excited to see your work.

The assessment will be a chance for you to demonstrate your coding skills. It will consist of a series of questions that will test your knowledge of programming concepts and your problem-solving ability.

The assessment should take about an hour to complete. If you have any questions, please feel free to contact us. We look forward to seeing your work!

---

## Important:
- This assignment is to show your development skills and key functionalities.
- It's not about being perfect but showcasing your abilities.
- **KEEP IT SIMPLE.**

---

## Backend API Development

### Requirements:

- [ ] Create a basic backend API using Node.js with Nestjs in Typescript.
- [ ] Use Zod or Class validators for dto’s.
- [ ] Create an invoice route:
  - [ ] `/invoices` - Displays a list of invoices fetched from the backend API.
  - [ ] `/invoices/:id` - Display an individual invoice.
  - [ ] `/invoices/total` - Aggregate the amount of all invoices by the due date.
  - [ ] `/auth: login`
- [ ] Use PostgreSQL.
- [ ] Use Prisma ORM to access your data.
- [ ] Use Prisma to seed data all demo data. Provide a username and password for login in documentation.
- [ ] Bonus: Implement pagination middleware.

### Backend Resources:

#### Database Schema:
- [ ] **User**: id, email, password, name
- [ ] **Invoice**: id, vendor_name, amount, due_date, description, user_id, paid (boolean)

#### API Endpoints:
- [ ] `POST /auth/login`: Authenticate a user and return an authentication token.
- [ ] `GET /invoices`: Retrieve all invoices.
- [ ] `GET /invoices/:id`: Retrieve details of a specific invoice for modal display.
- [ ] `GET /invoices/total`: Retrieve a data aggregation of the total amount due by due_date.
  - The totals API is only for the backend, with no frontend implementation.

### Expected Features and Functionalities:
- [ ] Seed user data and have a simple login.
- [ ] Fetching invoices: API should be able to serve their invoices.
- [ ] Detailed View: Provide detailed information on a specific invoice when queried by its ID. This will be used for modal display on the front end.

### Steps:
- [ ] Setup: Initialize a new backend server project.
- [ ] The API should showcase your ability to create key functionalities on the backend.
- [ ] Database Connection: Connect your backend to a database of your choice and define schemas/models for invoices.
- [ ] API Routes: Set up the necessary API routes as mentioned above.
- [ ] Make sure that the API has appropriate error-handling mechanisms.
- [ ] Authentication: Implement an authentication mechanism to secure your API.
- [ ] Ensure the API has appropriate error-handling mechanisms.

---

## Frontend Requirements:

- [ ] Set up a React application using @vite.
- [ ] Use TypeScript.
- [ ] Use Redux Tool Kit for state management.
- [ ] Use React Query.
- [ ] Use Zod for frontend validation.
- [ ] Simple Login.
- [ ] Create two main routes/pages:
  - [ ] Main page (blank).
  - [ ] `/invoices`: Displays a list of invoices fetched from the backend API.
    - [ ] Clicking on invoices should open a popup/modal to show its details.
    - [ ] Implement a popup/modal to display individual invoice info.
- [ ] Bonus: Implement error handling for potential failed API requests.
- [ ] Bonus: Implement pagination.
- [ ] Create proper Readme.

### Frontend Mock-up:

- Use the provided mock-up as a guideline. Do not focus on styling.

### Steps:
- [ ] Setup: Initialize a new React app using @vite. Install required dependencies like redux, Axios, and any other necessary packages.
- [ ] Redux-TookKit Setup: Implement Redux for state management.
- [ ] Routing: Set up React Router with `/invoices`.
- [ ] UI Components: Create components based on the provided mock-up:
   - [ ] **InvoiceList**: Display a list of invoices.
   - [ ] A popup/modal component to display the invoice details.
- [ ]  Fetch and Display Data: Connect your components to the Redux store and fetch the data from the API.
- [ ]  Popup/Modal: Implement functionality such that when a user clicks on an invoice in the InvoiceList, a popup/modal displays detailed information about that invoice.
- [ ]  Error Handling: (Optional) Implement error handling for potential API request failures.

---

## Final Notes:
- [ ] Create a docker-compose for the database and/or other services.
- [ ] Make the app as easy as possible to seed the database and build/run for testing.

---

## Submission:

- [ ] Create a GitHub repo.
- [ ] Upload the web app.
- [ ] Email repo URL link to:
   - cghiurea@altametrics.com
   - CC: hserafinjr@altametrics.com
   - Along with First Name, Last Name, and any comments you wish to include.

---
