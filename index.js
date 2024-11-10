const app = require('./backend/app');
const path = require('path');
const express = require('express');

app.use(express.static(path.join(__dirname, 'frontend')));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});