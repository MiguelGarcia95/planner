const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoardSchema = new Schema({

});

/**
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
 */

const Item = mongoose.model('board', BoardSchema);

module.exports = Item;
