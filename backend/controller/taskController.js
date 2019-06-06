const Task = require('../model/Task');

exports.createTask = async (req, res) => {
	const newTask = await new Task(req.body).save();
	res.json(newTask);
};

exports.getTasks = async (req, res) => {
	const tasks = await Task.find();
	res.json(tasks);
};
