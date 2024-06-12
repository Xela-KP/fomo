import { googleLogin, login, signup } from '../controllers/auth.controller.js';

import e from 'express';

const router = e.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/google', googleLogin);

export default router;
