import { Router } from 'express';

import auth from '../controllers/auth.controller';
// import helpers from '../helpers/staffs.helper';
import authValidator from '../validation/auth.validation';

const router = Router();

router.post('/auth/signup',
    authValidator.validateSignup,
    authValidator.validateResult,
    auth.signup);

export default router;
