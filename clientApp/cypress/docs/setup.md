# Cypress Setup with Cucumber and Gherkin

## Install

Change into the `clientApp` directory.

```bash
cd clientApp
```

```bash
npm install
```

## Run Tests

In order to successfully run the tests, a dev server has to be running.

1.  Start dev server

```bash
npm run start
```

2.  Open a new terminal tab and run the end-to-end tests.

```bash
npm run e2e
```

## Write Cucumber Features

> Cucumber feature specs go in the `cypress/integration` directory

```gherkin
// -> Google.feature
Feature: The Google

  I want to search for things

  Scenario: Opening a search engine
    Given I open Google page
    Then I see "Google" in the title
```

## Write Feature Spec Test Routines

> Feature spec routines go in the `cypress/support/step_definitions` directory

```javascript
// -> google.js
const url = 'https://google.com';

given('I open Google page', () => {
  cy.visit(url);
});

then(`I see {string} in the title`, title => {
  cy.title().should('include', title);
});
```
