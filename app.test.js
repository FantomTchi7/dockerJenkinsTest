const { travel, app } = require('./app');

test('', () => {
  process.env.TRAVEL = 'France';
  expect(travel("France")).toBe('My favourite country is France!');
});
