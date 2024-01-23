// cypress/integration/navigation.spec.js

import HomePage from '../pageObjects/Homepage';

describe('Navigation Tests', () => {
  beforeEach(() => {
    HomePage.visit();
  });

  it('should assert header links', () => {
    HomePage.assertHeaderLinks();
  });
});