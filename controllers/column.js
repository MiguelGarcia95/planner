const Column = require('../models/Column');

exports.index = async (req, res) => {
  try {
    // const boards = await Board.find({'userId': req.query.userId});
    // res.status(201).send(boards);
  } catch (error) {
    res.status(400).send({error});
  }
}

exports.create = async (req, res) => {
  const column = new Column(req.body);
  console.log(req.body);
  try {
    await column.save();
    res.status(201).send({column});
  } catch (error) {
    res.status(400).send({error});
  }
}

exports.show = async (req, res) => {
  try {
    // const board = await Board.findOne({"_id": req.query.id, 'userId': req.query.userId});
    // res.status(201).send(board);
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