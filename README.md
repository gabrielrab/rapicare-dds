# Rapicare DDS

Useful data definition specification for Rapicare API.

## Use cases

If you need to create a status filter widget for an order listing component, you must to know all available status in the API and its labels, like "processing" means "Em execução". Rapicare DDS exposes a variable for this field that includes its label and optionally a description.

### Example

```javascript
import { order } from "rapicare-dds";

const status = Object.keys(order.status);
// Voilá, you've just got all available status for orders

console.log(status.processing.label);
// "Em execução"
console.log(status.processing.description);
// 'Consolidação de produtos internamente. Antecede "Confirmado"'
```

## Available definitions

| Entity               | Field              | Variable                    |
| -------------------- | ------------------ | --------------------------- |
| Order                | status             | order.status                |
| Order                | type               | order.type                  |
| Order                | recurringFrequency | order.recurringFrequency    |
| Order                | invoiceType        | order.invoiceType           |
| Invoice              | type               | invoice.type                |
| Invoice              | status             | invoice.status              |
| InvoicePayment       | status             | invoicePayment.status       |
| User                 | role               | user.role                   |
| DeliveryOrder        | status             | deliveryOrder.status        |
| DeliveryOrderRequest | status             | deliveryOrderRequest.status |
| AccessPolicy         | visibility         | accessPolicy.visibility     |
