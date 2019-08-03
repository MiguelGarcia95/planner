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

app.use('/boards', board);
app.use('/columns', column);
app.use('/tasks', task);
app.use('/auth', user);

app.listen(port, () => {
  console.log(`Server is up on port: ${port}`);
}) 