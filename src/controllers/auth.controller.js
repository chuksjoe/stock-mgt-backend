import models from '../db/models';
import utils from '../utils/auth.utils';

const { staffs } = models;

export default {
    signup: async (req, res) => {
        try {
            const {
                firstname, lastname, email, password,
            } = req.body;
            const staff = {
                firstname, lastname, email, password, role: 'staff',
            };
            const data = await staffs.create(staff);
            data.token = utils.generateToken(data.id, email, data.role);
            res.status(201)
            .send({
                status: 201,
                data,
                message: `You have successfully registered with the email: ${email}`,
            });
        } catch (err) {
            // handle error
            res.status(500)
                .send({
                    status: 500,
                    error: err.message,
                });
        }
    },
};
