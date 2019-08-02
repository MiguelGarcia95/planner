const Column = require('../models/Column');

module.exports = {

  index: async (req, res) => {
    try {
      const columns = await Column.find({'boardId': req.query.boardId});
      res.status(201).send({columns});
    } catch (error) {
      res.status(400).send({error});
    }
  },
  
  create: async (req, res) => {
    const column = new Column(req.body);
    try {
      await column.save();
      res.status(201).send({column});
    } catch (error) {
      res.status(400).send({error});
    }
  },
  
  updateColumn: async (req, res) => {
    try {
      const column = await Column.findByIdAndUpdate(req.body._id, {$set:req.body});
      res.status(201).send({column});
    } catch (error) {
      res.status(400).send({error});
    }
  },
  
  updateColumnTasks: async (req, res) => {
    try {
      await Column.findByIdAndUpdate(req.body._id, {$set:req.body});
      res.status(201).send('Success');
    } catch (error) {
      res.status(400).send({error});    
    }
  },

  rearrangeColumnTasks: async (req, res) => {
    try {
      await Column.findByIdAndUpdate(req.body._id, {$set:req.body});
      res.status(201).send('Success');
    } catch (error) {
      res.status(400).send({error});    
    }
  },
  
  delete: async (req, res) => {
    try {
      await Column.findByIdAndRemove(req.query.columnId);
      res.status(201).send('Success');
    } catch (error) {
      res.status(400).send({error});    
    }
  },

  deleteBoardColumns: async (req, res) => {
    try {
      await Column.deleteMany({"boardId": req.query.boardId});
      res.status(201).send('Success');
    } catch (error) {
      res.status(400).send({error});
    }
  }
}