const express = require('express');
const app = express();
const port = 3000;
const travel = process.env.TRAVEL;

app.get('/travel', (req, res) => {
res.json({"text": travel});
});

if (require.main === module) {
app.listen(port, () => {
console.log(`App listening at http://localhost:${port}`);
});
}
