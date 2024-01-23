// cypress/integration/users-service.spec.js

describe('Users Service Tests', () => {
  const newUser = {
    name: 'John Doe',
    id: '12345'
  };

  let createdUserId;

  it('should add a new user', () => {
    cy.request('POST', 'http://localhost:5000/users', newUser)
      .its('body')
      .should('deep.equal', newUser)
      .then((response) => {
        createdUserId = response.id;
      });
  });

  it('should get the added user by ID', () => {
    cy.request('GET', `http://localhost:5000/users/${createdUserId}`)
      .its('body')
      .should('deep.equal', newUser);
  });

  it('should return 404 when getting a non-existing user', () => {
    const nonExistingUserId = 'nonexistent123';

    cy.request({
      method: 'GET',
      url: `http://localhost:5000/users/${nonExistingUserId}`,
      failOnStatusCode: false
    })
      .its('status')
      .should('eq', 404);
  });

  it('negative scenario: should return 400 when adding a user with missing required fields', () => {
    const invalidUser = {
      // Missing 'id' field
      name: 'Invalid User',
    };

    cy.request({
      method: 'POST',
      url: 'http://localhost:5000/users',
      body: invalidUser,
      failOnStatusCode: false
    })
      .its('status')
      .should('eq', 400);
  });

  it('should return 500 when editing a user with invalid data', () => {
    const invalidUserData = {
      // Missing 'id' field
      name: 'Invalid Data',
    };

    cy.request({
      method: 'PUT',
      url: `http://localhost:5000/users/${createdUserId}`,
      body: invalidUserData,
      failOnStatusCode: false
    })
      .its('status')
      .should('eq', 500);
  });

  it('bug: should return 500 when deleting a non-existing user', () => {
    const nonExistingUserId = 'nonexistent123';

    cy.request({
      method: 'DELETE',
      url: `http://localhost:5000/users/${nonExistingUserId}`,
      failOnStatusCode: false
    })
      .its('status')
      .should('eq', 500);
  });

  

  it('bug: should return 400 when adding a user with duplicate ID', () => {
    cy.request({
    method: 'POST',
    url: 'http://localhost:5000/users',
    body: newUser,
    failOnStatusCode: false
 })
    .its('status')
    .should('eq', 400);
});


  it('should return 401 when trying to access the service without authentication', () => {
    cy.request({
    method: 'GET',
    url: 'http://localhost:5000/users',
    failOnStatusCode: false
  })
    .its('status')
    .should('eq', 401);
 });

});





