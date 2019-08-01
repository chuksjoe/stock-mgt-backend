import express from 'express';
import dotenv from 'dotenv';
import customEnv from 'custom-env';
import debug from 'debug';
import cors from 'cors';

customEnv.env(true);
dotenv.config();

const debugLog = debug('web-app');
const app = express();
const { port, mode } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.options('*', cors());

app.get('/', (req, res) => {
	res.status(200).send({ status: 200, message: 'Welcome to my Stock/Inventory Web App API.' });
});

const listener = app.listen(port || 5000, () => {
	debugLog(`Inventory MGT App running on port ${port}, in ${mode}...`);
});

module.exports = app;
module.exports.port = listener.address().port;
