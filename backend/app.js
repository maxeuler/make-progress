const express = require('express');
const mongoose = require('mongoose');

const app = express();

require('dotenv').config({ path: 'variables.env' });
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on('error', err => {
	console.log(`🚫  🙅  🚫  🙅  🚫  👉  ${err.message}`);
});

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
	console.log(`Express running 👉  PORT ${server.address().port}`);
});