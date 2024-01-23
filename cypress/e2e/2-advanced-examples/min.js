// homepage.spec.js
import HomePage from './HomePage';

describe('90min website tests', () => {
  it('should display header links', () => {
    // Arrange
    HomePage.visit();

    // Act
    const headerLinks = HomePage.getHeaderLinks();

    // Assert
    headerLinks.should('be.visible');
    headerLinks.contains('Link1').should('exist'); // Adjust link text as per your actual website
    headerLinks.contains('Link2').should('exist');
    // Add more links as needed

    // You can add more assertions or tests here
  });
});