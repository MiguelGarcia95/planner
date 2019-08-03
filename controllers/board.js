const Board = require('../models/Board');

module.exports = {
  index: async (req, res) => {
    try {
      const boards = await Board.find({'userId': req.query.userId});
      console.log(boards)
      res.status(201).send({boards});
    } catch (error) {
      res.status(400).send({error});
    }
  },
  
  create: async (req, res) => {
    const board = new Board(req.body);
    try {
      await board.save();
      res.status(201).send({board});
    } catch (error) {
      console.log(error)
      res.status(400).send({error});
    }
  },
  
  show: async (req, res) => {
    try {
      const board = await Board.findOne({"_id": req.query.id, 'userId': req.query.userId});
      res.status(201).send({board});
    } catch (error) {
      res.status(400).send({error});
    }
  },

  updatedBoard: async (req, res) => {
    try {
      await Board.findByIdAndUpdate(req.body._id, {$set:req.body});
      res.status(201).send('Success');
    } catch (error) {
      res.status(400).send({error});
    }
  },

  updateBoardColumns: async (req, res) => {
    try {
      await Board.findByIdAndUpdate(req.body._id, {$set:req.body});
      res.status(201).send('Success');
    } catch (error) {
      res.status(400).send({error});    
    }
  },
  
  rearrangeBoardColumns: async (req, res) => {
    try {
      await Board.findByIdAndUpdate(req.body._id, {$set:req.body});
      res.status(201).send('Success');
    } catch (error) {
      res.status(400).send({error});    
    }
  },
  
  delete: async (req, res) => {
    try {
      await Board.deleteOne({"_id": req.query.boardId})
      res.status(200).send('Success');
    } catch (error) {
      res.status(400).send({error});    
    }
  }
}