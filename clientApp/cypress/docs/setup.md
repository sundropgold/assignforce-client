# Cypress Setup with Cucumber and Gherkin

## Install

```bash
npm install
```

## Run Tests

```
npm run e2e
```

## Write Cypress Tests

> Cypress specific tests go in the `cypress/integration` directory

```javascript
// -> spec.ts
it('loads', () => {
  cy.visit('http://localhost:4200');
});
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

> Spec routines go in the `cypress/support/step_definitions` directory

```gherkin
// -> google.js
const url = 'https://google.com';

given('I open Google page', () => {
  cy.visit(url);
});

then(`I see {string} in the title`, title => {
  cy.title().should('include', title);
});
```


