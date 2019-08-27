import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export default {
    generateToken: (id, email, role) => {
        const payload = { id, email, role };
        const secret = process.env.JWT_SECRET;
        const option = { expiresIn: '1d', issuer: 'stock-mgt-app' };

        return jwt.sign(payload, secret, option);
    },
};
