/* global given, then  */
const url = '/batches';

given('I am on the home page', () => {
  cy.visit('/');
});

then('the URL is {string}', url => {
  urlShouldContain(url);
});

then('I can see {string}', text => {
  cy.get(`*:contains(${text})`).should('contain', text);
});
