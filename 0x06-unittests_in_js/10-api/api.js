const express = require('express');

const app = express();
const port = 7865;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

app.get('/available_payments', (req, res) => {
  const paymentsObj = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };

  res.send(paymentsObj);
});

app.post('/login', (req, res) => {
  let userName = '';
  if (req.body) {
    userName = req.body.userName;
  }
  res.send(`Welcome ${userName}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
