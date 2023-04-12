require('dotenv').config();
const app = require('./app');

const port = process.env.PORT || 3002;

app.get('/', (_request, response) => {
  response.send();
});

app.listen(port, () => console.log('ouvindo porta', port));