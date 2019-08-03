const express = require('express');
const cors = require('cors');
const app = express();

const board = require('./routes/board');
const column = require('./routes/column');
const task = require('./routes/task');
const user = require('./routes/user');

const port = process.env.PORT || 5000;
require('./db/mongoose');
app.use(express.json());
app.use(cors());

// Serve static assets 
if (process.env.NODE_ENV === "production") {
  app.use(express.Router.static("client/build"));
}

// Routes
app.use('/boards', board);
app.use('/columns', column);
app.use('/tasks', task);
app.use('/auth', user);

app.listen(port, () => {
  console.log(`Server is up on port: ${port}`);
}) 