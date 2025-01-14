# Cypress Setup and Usage Guide

## Prerequisites

Before installing Cypress, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v12 or higher)
- npm (comes with Node.js) or Yarn

## Installation

1. **Navigate to your project directory:**
   ```bash
   cd your-project-directory
   ```

2. **Install Cypress via npm:**
   ```bash
   npm install cypress --save-dev
   ```
   
   *Alternatively, using Yarn:*
   ```bash
   yarn add cypress --dev
   ```

3. **Verify Cypress Installation:**
   ```bash
   npx cypress verify
   ```

## Running Cypress Tests in Headless Mode

To run specific Cypress test files in headless mode, use the following command:

```bash
npx cypress run --spec "cypress/e2e/one_day_sheet_creation_spec.cy.js,cypress/e2e/sign_up_sheet_one_day.cy.js"
```

### Explanation of the Command:
- `npx cypress run`: Runs Cypress in headless mode using Electron by default.
- `--spec`: Specifies the test files to run. Multiple files can be separated by commas.

### Running with a Different Browser (Optional):
To run the tests in Chrome or Firefox in headless mode, append the `--browser` flag:

```bash
npx cypress run --browser chrome --spec "cypress/e2e/one_day_sheet_creation_spec.cy.js,cypress/e2e/sign_up_sheet_one_day.cy.js"
```

## Useful Cypress Commands

- **Open Cypress Test Runner (GUI):**
  ```bash
  npx cypress open
  ```

- **Run All Tests in Headless Mode:**
  ```bash
  npx cypress run
  ```

- **Run Tests in a Specific Browser:**
  ```bash
  npx cypress run --browser firefox
  ```

