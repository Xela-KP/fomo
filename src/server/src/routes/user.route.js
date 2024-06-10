import e from 'express';
import {
    root,
    test,
    putBio,
    putAbout,
    user,
    patchLinks,
    putProfilePicture,
} from '../controllers/user.controller.js';

const router = e.Router();

router.get('/', root);
router.get('/user', user);
router.get('/test', test);

router.put('/user/:id/bio', putBio);
router.put('/user/:id/about', putAbout);
router.patch('/user/:id/links', patchLinks);
router.put('/user/:id/pfp', putProfilePicture);

export default router;
