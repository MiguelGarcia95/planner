const Board = require('../models/Board');

exports.index = async (req, res) => {
  try {
    const boards = await Board.find({'userId': req.query.userId});
    res.status(201).send(boards);
  } catch (error) {
    res.status(400).send({error});
  }
}

exports.create = async (req, res) => {
  const board = new Board(req.body);
  try {
    await board.save();
    res.status(201).send({board});
  } catch (error) {
    res.status(400).send({error});
  }
}

exports.show = async (req, res) => {
  try {
    const board = await Board.findOne({"_id": req.query.id, 'userId': req.query.userId});
    res.status(201).send(board);
  } catch (error) {
    res.status(400).send({error});
  }
}