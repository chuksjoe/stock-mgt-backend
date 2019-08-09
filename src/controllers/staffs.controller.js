import models from '../db/models';

const { staffs } = models;

module.exports = {
	createStaff: (req, res) => {
		const {
			firstname,
			lastname,
			email,
			password,
			department,
			phone,
			address,
		} = req.body;
		const staff = {
			firstname,
			lastname,
			email,
			password,
			department,
			phone,
			address,
			role: 'staff',
		};
		return staffs
			.create(staff)
			.then((staffObj) => {
				res.status(201).send({
					status: 201,
					message: 'Successully created a staff account.',
					data: staffObj,
				});
			})
			.catch((error) => {
				res.status(400).send({
					status: 400,
					error,
				});
			});
	},

	getStaffById: (req, res) => {
		const { staff_id } = req.params;

		return staffs
			.findByPk(parseInt(staff_id, 10))
			.then((staff) => {
				res.status(200).send({
					status: 200,
					data: staff,
				});
			})
			.catch((error) => {
				res.status(400).send({
					status: 400,
					error,
				});
			});
	},

	getAll(req, res) {
		return staffs
			.findAll()
			.then((allStaffs) => {
				res.status(200).send({
					status: 200,
					data: allStaffs,
				});
			})
			.catch((error) => {
				res.status(400).send({
					status: 400,
					error,
				});
			});
	},
};
