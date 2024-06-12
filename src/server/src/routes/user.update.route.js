import {
    patchLinks,
    putAbout,
    putBio,
    putProfilePicture,
} from '../controllers/user.update.controller.js';

import e from 'express';
import { verifyUser } from '../utils/user.util.js';

const router = e.Router();

router.put('/:id/bio', verifyUser, putBio);
router.put('/:id/about', verifyUser, putAbout);
router.patch('/:id/links', verifyUser, patchLinks);
router.put('/:id/pfp', verifyUser, putProfilePicture);

export default router;
