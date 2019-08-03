const express = require('express');
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
app.use(function(req, res, next) {
  // res.header("Content-Security-Policy", "default-src *;");
  res.header("Content-Security-Policy", "default-src 'self' 'unsafe-inline';script-src 'self' https://kit.fontawesome.com;object-src 'none';img-src 'self';media-src 'self';frame-src 'none';font-src 'self' data:;connect-src 'self';style-src 'self'");
  return next();
})

// Serve static assets 
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
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