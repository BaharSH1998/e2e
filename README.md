# E2E

This project includes End-to-End (E2E) tests using [Cypress](https://www.cypress.io/) to test the Login, Sign-Up, and Dashboard pages of a web application.

---

## Prerequisites

Before running this project, ensure the following tools are installed:

1. **Node.js and npm**:
   - Check versions:
     ```bash
     node -v
     npm -v
     ```
   - Download the latest version from [Node.js official website](https://nodejs.org/).

2. **Cypress**:
   - Cypress is included in the project dependencies and will be installed via `npm`.

  install cypress
     - npm install cypress --save-dev
  
   run test in console
     -npx cypress run

    run test in browser
     -npx cypress open

3. **A local server to host HTML files**:
   - Recommended tool: [live-server](https://www.npmjs.com/package/live-server).
  
    install live-server
      -npm install -g live-server

    run live-server
      -live-server src

---

## Installation

Follow these steps to set up the project:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/BaharSH1998/e2e.git
   cd e2e
