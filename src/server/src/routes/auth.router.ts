import authControls from '../controllers/authentication/index.js';
import { catchError } from '../handlers/errorHandler.js';
import express from 'express';

const router = express.Router();
const controls = authControls();

router.post('/signup', catchError(controls.signup));
router.post('/login', catchError(controls.login));
router.post('/google', catchError(controls.googleLogin));

export default router;
