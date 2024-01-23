import HomePage from './aliasing.cy';

it('asserts header links on the home page', () => {
  HomePage.visit();
  HomePage.assertHeaderLinks();
});