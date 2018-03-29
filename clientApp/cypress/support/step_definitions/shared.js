given('I have just logged in', () => {
  cy.visit('/');
});

when('I click on the {string} tab with id of {string}', (tab, id) => {
  cy
    .get(id)
    .should('contain', tab)
    .click();
});

then('I can see {string}', text => {
  cy.get(`*:contains(${text})`).should('contain', text);
});

then('the URL is {string}', url => {
  cy.url().should('contain', url);
});
