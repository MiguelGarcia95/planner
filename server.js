const express = require('express');
const csp = require('helmet-csp');
const cors = require('cors');
const app = express();
const path = require('path')

const board = require('./routes/board');
const column = require('./routes/column');
const task = require('./routes/task');
const user = require('./routes/user');

const port = process.env.PORT || 5000;
require('./db/mongoose');
app.use(express.json());
app.use(cors());
app.use(csp({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'", 'https://kit.fontawesome.com/5f7fe36d22.js'],
    styleSrc: ["'self'", "'unsafe-inline'", 'https://kit-free.fontawesome.com'],
    fontSrc: ['https://kit-free.fontawesome.com'],
  }
}))

// Serve static assets 
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

// Routes
app.use('/boards', board);
app.use('/columns', column);
app.use('/tasks', task);
app.use('/auth', user);

app.listen(port, () => {
  console.log(`Server is up on port: ${port}`);
}) 