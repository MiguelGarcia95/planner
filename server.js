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
      {id: 'boardId', title: 'titleName },
      {id: 'boardId2', title: 'titleName2 },
    ]
  }

  boardID: {
    boardId,
    boardName,
    userId,
    tasks: [
      {id: taskId, name: 'taskName' ... }
    ]
    columns: [
      {id: columnId, name: 'columnName' ... }
    ],
    columnOrder: ['boardId, boardId2 ...']
  }

  columnID: {
    columnId,
    columnName,
    boardId,
    taskOrder: ['taskId, taskId2 ...']
  }

  taskId: {
    taskId,
    columnId,
    boardId,
    taskName,
    taskDescription,
    ...
  }
*/

/**
 * Models
 * UserModel - id, name, email, pswd bgColor, navColor, boards
 * BoardModel - id, title, description, userId, bgColor, tasks, columns, columnOrder users?
 * ColumnModel - id, name, taskIds, status, dateStarted, dateCompleted
 * TaskModel - id, name, description, status, dateStarted, dateCompleted,
 */

app.listen(port, () => {
  console.log(`Server is up on port: ${port}`);
}) 