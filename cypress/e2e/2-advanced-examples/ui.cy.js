it('Test and assert the 90min website menu links', () => {
  cy.visit('https://www.90min.com');
  
  // Assert the presence of links in the header
  cy.get('*[class^="_149jd1bu"]')
      .should('have.text', 'Premier League')
      .should('have.text', 'Transfer')
      .should('have.text', 'Champions League')
      .should('have.text', 'La Liga News')
      .should('have.text', 'Serie A')
      .should('have.text', 'More');

  // Assert the presence of specific links
  

  cy.visit('https://www.90min.com/posts/premier-league-fixtures-2023-24-season')
  .contains('Premier League', { timeout: 10000 }).should('exist');

  cy.visit('https://www.90min.com/categories/transfer')
  .contains('Transfer', { timeout: 10000 }).should('exist');

  cy.visit('https://www.90min.com/leagues/champions-league')
  .contains('Champions League', { timeout: 10000 }).should('exist');

  
  cy.visit('https://www.90min.com/leagues/la-liga')
  .contains('La Liga', { timeout: 10000 }).should('exist');

  cy.visit('https://www.90min.com/leagues/serie-a')
  .contains('Serie A', { timeout: 10000 }).should('exist');

  cy.visit('https://www.90min.com/leagues/ligue-1')
  .contains('Ligue 1', { timeout: 10000 }).should('exist');
  
});
