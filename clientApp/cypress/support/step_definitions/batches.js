given('I am on the batches page', () => {
  cy.visit('/batches');
});

then('I should see the All Batches tab', () => {
  cy.get('mat-panel-title').should('contain', 'All Batches');
});

then('I should see the Batch Timeline tab', () => {
  cy.get('mat-panel-title').should('contain', 'Batch Timeline');
});
