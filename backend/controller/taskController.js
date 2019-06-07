const Task = require('../model/Task');

exports.createTask = async (req, res) => {
	const { title, unit } = req.body.task;
	const units = parseFloat(req.body.task.units);
	const newTask = await new Task({ title, unit, units }).save();
	res.json(newTask);
};

exports.getTasks = async (req, res) => {
	const tasks = await Task.find();
	res.json(tasks);
};

exports.addSegments = async (req, res) => {
	const task = await Task.findOneAndUpdate({ _id: req.body.task }, req.body, {
		new: true,
		runValidators: true
	}).exec();
	res.json(task);
};
