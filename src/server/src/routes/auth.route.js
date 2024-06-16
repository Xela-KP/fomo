import authControls from '../controllers/authentication/index.js';
import express from 'express';

const router = express.Router();
const controls = authControls();

router.post('/signup', controls.signup);
router.post('/login', controls.login);
router.post('/google', controls.googleLogin);

export default router;
