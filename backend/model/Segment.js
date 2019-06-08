const mongoose = require('mongoose');

const segmentSchema = new mongoose.Schema({
	units: {
		type: Number,
		required: 'You have to provide a count of units!'
	},
	description: String
});

module.exports = new mongoose.model('Segment', segmentSchema);
