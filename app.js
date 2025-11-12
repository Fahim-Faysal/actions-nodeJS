const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('🚀 <h1>Fahim</h1> <h1>Faysal</h1> <h1>Siyam</h1>Hello from Node CI/CD pipeline!'));

app.listen(port, () => console.log(`App running on port ${port}`));

module.exports = app; // for testing
