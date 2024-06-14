import {
    deleteUser,
    getUser,
    patchLinks,
    putAbout,
    putBio,
    putProfilePicture,
} from '../controllers/user.controller.js';

import e from 'express';
import { verifyUser } from '../middleware/auth.middleware.js';

const router = e.Router();
router.get('/:username', getUser);
router.delete('/delete/:id', verifyUser, deleteUser);
router.put('/update/:id/bio', verifyUser, putBio);
router.put('/update/:id/about', verifyUser, putAbout);
router.patch('/update/:id/links', verifyUser, patchLinks);
router.put('/update/:id/pfp', verifyUser, putProfilePicture);

export default router;
