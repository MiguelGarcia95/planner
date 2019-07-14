const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
request('./db/mongoose');

app.listen(port, () => {
  console.log(`Server is up on port: ${port}`);
}) 