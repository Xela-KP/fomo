import e from 'express';
import { deleteUser } from '../controllers/user.controller.js';
import { verifyUser } from '../utils/verifyUser.js';

const router = e.Router();
router.delete('/delete/:id', verifyUser, deleteUser);

export default router;
