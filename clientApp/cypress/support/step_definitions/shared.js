/******************************************************************
 * GIVEN
 ******************************************************************/

given('I have just logged in', () => {
  cy.visit('/');
});

/******************************************************************
 * WHEN
 ******************************************************************/

when('I click on the {string} tab in the {string}', (tab, navbar) => {
  cy
    .get(`[data-cy="${navbar}"]`)
    .contains(tab)
    .click();
});

// when('I click on the {string} tab with id of {string}', (tab, id) => {
//   cy
//     .get(id)
//     .should('contain', tab)
//     .click();
// });

/******************************************************************
 * THEN
 ******************************************************************/

then('I can see {string}', text => {
  cy.get(`*:contains(${text})`).should('contain', text);
});

then('the URL is {string}', url => {
  cy.url().should('contain', url);
});
