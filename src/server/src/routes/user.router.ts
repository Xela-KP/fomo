import { catchError } from '../handlers/errorHandler.js';
import express from 'express';
import userControls from '../controllers/user/index.js';
import verifyUser from '../middleware/auth.middleware.js';

const router = express.Router();
const controls = userControls();

router.get('/user/:username', catchError(controls.read));
router.delete('/user/delete/:id', verifyUser, catchError(controls.delete));
router.post('/user/update/:id', verifyUser, catchError(controls.update));
// router.put(
//     '/user/update/:id/about',
//     verifyUser,
//     catchError(controls.updateAbout)
// );
// router.patch(
//     '/user/update/:id/links',
//     verifyUser,
//     catchError(controls.updateLinks)
// );
// router.put(
//     '/user/update/:id/pfp',
//     verifyUser,
//     catchError(controls.updateProfilePicture)
// );

export default router;
