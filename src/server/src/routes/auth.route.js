import e from 'express';
import { signup, login, googleLogin } from '../controllers/auth.controller.js';

const router = e.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/google', googleLogin);

export default router;
