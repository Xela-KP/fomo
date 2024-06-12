import e from 'express';
import { deleteUser, getUser } from '../controllers/user.controller.js';
import { verifyUser } from '../utils/verifyUser.js';

const router = e.Router();
router.get('/:username', getUser);
router.delete('/delete/:id', verifyUser, deleteUser);

export default router;
