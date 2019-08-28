import staffs from './staffs.route';
import auth from './auth.route';

export default (prefix, app) => {
	app.use(prefix, staffs);
	app.use(prefix, auth);
};
