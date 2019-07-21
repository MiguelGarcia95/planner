const Task = require('../models/Task');

exports.index = async (req, res) => {
  try {
    const tasks = await Task.find({'columnId': req.query.columnId});
    res.status(201).send(tasks);
  } catch (error) {
    res.status(400).send({error});
  }
}

exports.create = async (req, res) => {
  const tasks = new Task(req.body);
  console.log(tasks);
  try {
    await tasks.save();
    res.status(201).send(tasks);
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