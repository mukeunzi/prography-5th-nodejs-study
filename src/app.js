const express = require('express');
const routes = require('./routes');
app = express();

app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(express.json());

app.use(routes);

module.exports = app;
