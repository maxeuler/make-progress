const Segment = require('../model/Segment');
const Task = require('../model/Task');

exports.createSegment = async (req, res) => {
	const { units, description, task } = req.body;
	const segment = await new Segment({ units, description }).save();
	await Task.findOneAndUpdate(
		{ _id: task },
		{ $push: { segments: segment._id } }
	).exec();
	res.json(segment);
};
