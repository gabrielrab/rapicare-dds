const definitions = require('./index');

it('should have Order definitions', () => {
  console.log(definitions);
  expect(definitions).toHaveProperty('order.status');
  expect(definitions).toHaveProperty('order.type');
  expect(definitions).toHaveProperty('order.invoiceType');
  expect(definitions).toHaveProperty('order.recurringFrequency');
});
