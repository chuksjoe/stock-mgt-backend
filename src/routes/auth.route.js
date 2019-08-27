import { Router } from 'express';

import auth from '../controllers/auth.controller';
import helpers from '../helpers/staffs.helper';

const router = Router();

router.post('/auth/signup', helpers.doesStaffExist, auth.signup);

export default router;
