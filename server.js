const express = require('express');

var time = require('./server/time')

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/', (req, res) => {
  res.json({ text: "Hello From Server" });
});

app.use('/api/time', time)

app.listen(port, () => console.log(`Listening on port ${port}`))