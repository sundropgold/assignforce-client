const findText = text => {
  return `*:contains(${text})`;
};

const urlShouldContain = text => {
  cy.url().should('contain', text);
};

when('I click on the {string} tab', tab => {
  console.log(findText(tab));
  cy
    .get(findText(tab))
    .should('contain', tab)
    .click();
});
