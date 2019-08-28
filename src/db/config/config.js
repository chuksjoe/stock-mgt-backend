require('custom-env').env(true);
require('dotenv').config();

const {
	/* DATABASE_URL, */ DB_USERNAME,
	DB_PASSWORD,
	DB_HOST,
	DB_PORT,
	DATABASE,
} = process.env;

module.exports = {
	development: {
		// use_env_variable: DATABASE_URL,
		username: DB_USERNAME,
		password: DB_PASSWORD,
		database: DATABASE,
		host: DB_HOST,
		port: DB_PORT,
		dialect: 'postgres',
	},
	test: {
		username: DB_USERNAME,
		password: DB_PASSWORD,
		database: DATABASE,
		host: DB_HOST,
		port: DB_PORT,
		dialect: 'postgres',
	},
	remote_test: {
		// use_env_variable: DATABASE_URL,
		username: 'root',
		password: 'password',
		database: 'stock_mgt_test',
		host: '127.0.0.1',
		port: '5432',
		dialect: 'postgres',
	},
	production: {
		// use_env_variable: DATABASE_URL,
		username: DB_USERNAME,
		password: DB_PASSWORD,
		database: DATABASE,
		host: DB_HOST,
		port: DB_PORT,
		dialect: 'postgres',
		dialectOption: {
			ssl: true,
			native: true,
		},
		logging: true,
	},
};
