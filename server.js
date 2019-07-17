const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
require('./db/mongoose');

/*
  userID: {
    userId,
    userName,
    backgroundColor,
    navColor,
    boards: [
      {
        boardId: {
          tasks: {}
          columns: {},
          columnOrder: []
        }
      }
    ]
  }
*/

/**
 * Models
 * UserModel - id, name, email, pswd bgColor, navColor, boards
 * BoardModel - id, title, description, userId, bgColor, tasks, columns, columnOrder users?
 * ColumnModel - id, name, taskIds, status, dateStarted, dateCompleted
 * TaskModel - id, name, description, status, dateStarted, dateCompleted,
 * 
 */

app.listen(port, () => {
  console.log(`Server is up on port: ${port}`);
}) 