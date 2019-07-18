const Board = require('../models/Board');

exports.index = async (req, res) => {
  const board = new Board(req.body);
  try {
    await board.save();
    res.status(201).send({board});
  } catch (error) {
    res.status(400).send({error});
  }
}