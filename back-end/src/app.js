const express = require('express');
const cors = require('cors');
const { getResults } = require('./controllers/search.controller');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/search', getResults);

app.get('/ping', (req, res) => {
  return res.status(200).json('pong')
});


module.exports = app;