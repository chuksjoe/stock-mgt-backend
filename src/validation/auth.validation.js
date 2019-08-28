import { check, validationResult } from 'express-validator';

import staffs from '../helpers/staffs.helper';

export default {
    validateSignup: [
        check('email')
            .isEmail()
            .withMessage('Please, enter a valid email address.')
            .custom(email => staffs.findStaffByEmail(email)
            .then((staff) => {
                if (staff) {
                    throw new Error(`User with this email (${email}) already exist.`);
                }
            })),
        check('password')
            .isLength({ min: 8 })
            .withMessage('The length of the password must be 8 and above.')
            .matches(/\d/)
            .withMessage('Password must contain at least one digit.'),
        check('firstname')
            .not().isEmpty()
            .withMessage('First name cannot be empty.'),
        check('lastname')
            .not().isEmpty()
            .withMessage('Last name cannot be empty.'),
    ],
    validateResult: (req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
            const error = [];
            errors.array().forEach((err) => {
                error.push(err.msg);
            });
			return res.status(400)
			.send({
                status: 400,
				error,
			});
		}
		return next();
	},
};
