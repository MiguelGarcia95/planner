const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  tasks: {
    type: Array,
    required: false,
  },
  columns: {
    type: Array,
    required: false,
  },
  columnOrder: {
    type: Array,
    required: false,
  }
});

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
