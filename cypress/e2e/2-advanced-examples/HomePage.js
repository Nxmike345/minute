// HomePage.js
class HomePage {
  visit() {
    cy.visit('https://www.90min.com');
  }

  getHeaderLinks() {
    return cy.get('.header-menu'); // Adjust this selector based on your website structure
  }
}

export default new HomePage();
