const Task = require('../model/Task');

exports.createTask = async (req, res) => {
  const { title, unit } = req.body.task;
  const units = parseFloat(req.body.task.units);
  const newTask = await new Task({ title, unit, units }).save();
  res.json(newTask);
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.find().populate({
    path: 'segments',
    model: 'Segment',
  });
  res.json(tasks);
};

exports.getTaskDetails = async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id }).populate({
    path: 'segments',
    model: 'Segment',
  });
  res.json(task);
};

exports.addSegments = async (req, res) => {
  const task = await Task.findOne({ _id: req.body.task });
  task.finishedUnits += req.body.finishedUnits;
  const updatedTask = await task.save();
  res.json(updatedTask);
};

exports.deleteTask = async (req, res) => {
  await Task.findOneAndDelete({ _id: req.body.id });
  res.json({ success: 'true' });
};
