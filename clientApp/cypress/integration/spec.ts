it('loads', () => {
  cy.visit('http://localhost:4200');
});

it('takes a snapshot', () => {
  cy.visit('http://localhost:4200');
  cy.get('p').snapshot({name: 'basic login page'});
});
