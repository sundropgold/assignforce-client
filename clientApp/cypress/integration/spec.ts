it('loads', () => {
  cy.visit('/');
});

it('can navigate', () => {
  cy.visit('/');
  cy
    .get('#mat-tab-label-0-1')
    .should('contain', 'BATCHES')
    .click();
});
