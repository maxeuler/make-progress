const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	unit: {
		type: String,
		required: 'You have to provide an unit!'
	},
	units: {
		type: Number,
		required: 'You have to provide a number of units!',
		min: 1
	}
});

module.exports = mongoose.model('Task', taskSchema);
