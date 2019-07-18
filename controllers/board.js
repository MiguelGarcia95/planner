const Board = require('../models/Board');

exports.create = async (req, res) => {
  const board = new Board(req.body);
  console.log('------------');
  console.log(req.body);
  console.log('------------');
  try {
    await board.save();
    res.status(201).send({board});
  } catch (error) {
    res.status(400).send({error});
  }
}