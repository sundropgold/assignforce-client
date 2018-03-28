/* global given, then  */
const url = '/batches';

given('I am on the home page', () => {
  cy.visit('/');
});

when('I click on the {string} tab', title => {
  cy
    .get('#mat-tab-label-0-1')
    .should('contain', title)
    .click();
});

then('The URL is {string}', url => {
  cy.url().should('contain', url);
});

then('I can see {string}', text => {
  cy.get(`*:contains(${text})`).should('contain', text);
});

given('I am on the batches page', () => {
  cy.visit('/batches');
});

then('true should be {int}', value => {
  expect(value).to.equal(24);
});
