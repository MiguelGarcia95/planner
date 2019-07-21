const Column = require('../models/Column');

exports.index = async (req, res) => {
  try {
    const columns = await Column.find({'boardId': req.query.boardId});
    res.status(201).send(columns);
  } catch (error) {
    res.status(400).send({error});
  }
}

exports.create = async (req, res) => {
  const column = new Column(req.body);
  try {
    await column.save();
    res.status(201).send(column);
  } catch (error) {
    res.status(400).send({error});
  }
}

exports.updateColumnTasks = async (req, res) => {
  console.log(req.body)
  try {
    const column = await Column.findByIdAndUpdate(req.body._id, {$set:req.body});
    res.status(201).send(column);
  } catch (error) {
    res.status(400).send({error});    
  }
}

exports.rearrangeColumnTasks = async (req, res) => {
  try {
    
  } catch (error) {
    res.status(400).send({error});    
  }
}

exports.delete = async (req, res) => {
  try {
    // await Board.findByIdAndDelete(req.query.id);
    // const board = await Board.findById(req.query.id);
    // await board.delete();
    // res.status(200).send(board);
  } catch (error) {
    res.status(400).send({error});    
  }
}