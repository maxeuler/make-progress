const mongoose = require('mongoose');

const segmentSchema = new mongoose.Schema({
	units: {
		type: Number,
		required: 'You have to provide a count of units!'
	},
	description: {
		type: String,
		required: 'You have to provide a description'
	}
});

module.exports = new mongoose.model('Segment', segmentSchema);
