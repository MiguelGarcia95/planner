const Task = require('../models/Task');

module.exports = {
  index: async (req, res) => {
    try {
      const tasks = await Task.find({'boardId': req.query.boardId});
      res.status(201).send({tasks});
    } catch (error) {
      res.status(400).send({error});
    }
  },

  create: async (req, res) => {
    const task = new Task(req.body);
    try {
      await task.save();
      res.status(201).send({task});
    } catch (error) {
      res.status(400).send({error});
    }
  },

  updateTask: async (req, res) => {
    try {
      const task = await Task.findByIdAndUpdate(req.body._id, {$set:req.body});
      res.status(201).send({task});
    } catch (error) {
      res.status(400).send({error});    
    }
  },

  delete: async (req, res) => {
    try {
      // await Board.findByIdAndDelete(req.query.id);
      // const board = await Board.findById(req.query.id);
      // await board.delete();
      // res.status(200).send(board);
    } catch (error) {
      res.status(400).send({error});    
    }
  }
}