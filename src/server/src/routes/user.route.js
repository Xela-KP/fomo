import express from 'express';
import userControls from '../controllers/user/index.js';
import { verifyUser } from '../middleware/auth.middleware.js';

const router = express.Router();
const controls = userControls();

router.get('/:username', controls.read);
router.delete('/delete/:id', verifyUser, controls.delete);
router.put('/update/:id/bio', verifyUser, controls.updateBio);
router.put('/update/:id/about', verifyUser, controls.updateAbout);
router.patch('/update/:id/links', verifyUser, controls.updateLinks);
router.put('/update/:id/pfp', verifyUser, controls.updateProfilePicture);

export default router;
