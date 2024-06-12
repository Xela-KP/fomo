import { deleteUser, getUser } from '../controllers/user.controller.js';

import e from 'express';
import { verifyUser } from '../utils/user.util.js';

const router = e.Router();
router.get('/:username', getUser);
router.delete('/delete/:id', verifyUser, deleteUser);

export default router;
