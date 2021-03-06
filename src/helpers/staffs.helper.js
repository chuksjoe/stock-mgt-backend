import models from '../db/models';

const { staffs } = models;

export default {
	findStaffByEmail: async (email) => {
		try {
			return await staffs
				.findOne({
					where: { email },
				});
		} catch (err) {
			throw err;
		}
	},
};
