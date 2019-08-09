import staffs from './staffs.route';

export default (prefix, app) => {
	app.use(prefix, staffs);
};
