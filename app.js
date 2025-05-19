const express = require('express');
const app = express();
const port = 3000;

const travel = (destination) => {
  destination = process.env.TRAVEL || destination;
  return `My favourite country is ${destination}!`;
};

app.get('/travel', (req, res) => {
  res.json({ text: travel("Nowhere") });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
}

module.exports = { app, travel };
