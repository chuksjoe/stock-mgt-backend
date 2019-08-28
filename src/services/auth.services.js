import models from '../db/models';

const { staffs } = models;

export default {
	signupStaff: async (staff) => {
		try {
			return await staffs.create(staff);
		} catch (err) {
			throw err;
		}
	},
};
