import e from 'express';
const router = e.Router();
import {
    putBio,
    putAbout,
    patchLinks,
    putProfilePicture,
} from '../controllers/user.update.controller.js';
import { verifyUser } from '../utils/verifyUser.js';

router.put('/:id/bio', verifyUser, putBio);
router.put('/:id/about', verifyUser, putAbout);
router.patch('/:id/links', verifyUser, patchLinks);
router.put('/:id/pfp', verifyUser, putProfilePicture);

export default router;
