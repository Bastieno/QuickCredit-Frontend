const express = require('express');
const path = require('path');

const buildPath = path.join(__dirname, '../', 'build');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(buildPath));

app.get('*', (request, response) => {
  response.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server is up');
});
