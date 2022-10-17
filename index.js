const Config = require('./config');
const routes = require('./routes');

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const http = require('http');

const app = express();

app.use(morgan(Config.debugMode && 'dev'));
app.use(express.json());
app.use(cors());

app.use(Config.apiRoot, routes);

app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended: true }));

app.use((err, req, res, next) => {
	if (err) {
		if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
			console.error(err.stack);
			return res.send('Bad request received from the client.').status(400);
		} else {
			console.error(err.stack);
			return res.send('Internal server error').status(500);
		}
	} else {
		next();
	}
});

const server = http.createServer(app);
const listener = server.listen(Config.httpPort, () => {
  console.log(`The server is listening for http requests at port ${listener.address().port}`);
});