const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  columnId: {
    type: String,
    required: true,
  },
  boardId: {
    type: String,
    required: true,
  },
  taskDescription: {
    type: String,
    required: false,
  }
});

const Task = mongoose.model('Board', taskSchema);

module.exports = Task;
