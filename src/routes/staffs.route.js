import { Router } from 'express';

import staffs from '../controllers/staffs.controller';
// import helpers from '../helpers/staffs.helper';

const router = Router();

router.post('/staff', staffs.createStaff);
router
	.get('/staff', staffs.getAll)
	.get('/staff/:staff_id', staffs.getStaffById);

export default router;
