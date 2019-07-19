const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const errorHandler = require('./errorHandler');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', routes);

app.use(errorHandler.notFount);

require('dotenv').config({ path: 'variables.env' });

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on('connected', () => {
  console.log(`🏆  connected`);
});
mongoose.connection.on('error', err => {
  console.log(`🚫  🙅  🚫  🙅  🚫  👉  ${err.message}`);
});

app.set('port', process.env.PORT || 8888);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running 👉  PORT ${server.address().port}`);
});
