import { catchError } from '../handlers/errorHandler.js';
import express from 'express';
import userControls from '../controllers/user/index.js';
import verifyUser from '../middleware/auth.middleware.js';

const router = express.Router();
const controls = userControls();

router.get('/user/:username', catchError(controls.read));
router.delete(
    '/user/delete/:id',
    catchError(verifyUser),
    catchError(controls.delete)
);
router.post(
    '/user/update/:id',
    catchError(verifyUser),
    catchError(controls.update)
);

export default router;
