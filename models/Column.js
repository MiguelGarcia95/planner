const mongoose = require('mongoose');

const columnSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  boardId: {
    type: String,
    required: true,
  },
  taskOrder: {
    type: Array,
    required: false,
  },
});

const Column = mongoose.model('Column', columnSchema);

module.exports = Column;
