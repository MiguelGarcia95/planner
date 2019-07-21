const express = require('express');
const cors = require('cors');
const app = express();
const board = require('./routes/board');
const column = require('./routes/column');
const task = require('./routes/task');
// const user = require('./routes/user');

const port = process.env.PORT || 5000;
require('./db/mongoose');
app.use(express.json());
app.use(cors());

app.use('/boards', board);
app.use('/columns', column);
app.use('/tasks', task);
// app.use('/user', user);

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
    tasks: [ MAY NOT NEED
      {id: taskId, name: 'taskName' ... }
    ]
    columns: [ MAY NOT NEED
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