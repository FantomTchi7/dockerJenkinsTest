const express = require('express');
const app = express();
const port = 3000;

app.get('/sweet', (req, res) => {
res.json({"text": "Pancake"});
});

if (require.main === module) {
app.listen(port, () => {
console.log(`App listening at http://localhost:${port}`);
});
}
