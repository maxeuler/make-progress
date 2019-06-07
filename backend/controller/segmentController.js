const Segment = require('../model/Segment');

exports.createSegment = async (req, res) => {
	const segment = await new Segment(req.body).save();
	res.json(segment);
};
