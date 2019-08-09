import models from '../db/models';

const { staffs } = models;

export default {
	doesStaffExist: (req, res, next) => {
		const { email } = req.body;
		staffs
			.findOne({
				where: { email },
			})
			.then((staffFound) => {
				if (staffFound) {
					res.status(400).send({
						status: 400,
						error: 'A staff with this email already exists.',
					});
				} else {
					next();
				}
			})
			.catch((error) => {
				res.status(400).send({
					status: 400,
					error,
				});
			});
	},
};
