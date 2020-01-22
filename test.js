const definitions = require('./index');

it('should have Order definitions', () => {
  expect(definitions).toHaveProperty('order.status');
  expect(definitions).toHaveProperty('order.type');
  expect(definitions).toHaveProperty('order.invoiceType');
  expect(definitions).toHaveProperty('order.recurringFrequency');
});

it('should have Invoice definitions', () => {
  expect(definitions).toHaveProperty('invoice.status');
  expect(definitions).toHaveProperty('invoice.type');
});

it('should have User definitions', () => {
  expect(definitions).toHaveProperty('user.role');
});

it('should have InvoicePayment definitions', () => {
  expect(definitions).toHaveProperty('invoicePayment.status');
});

it('should have DeliveryOrder definitions', () => {
  expect(definitions).toHaveProperty('deliveryOrder.status');
});
