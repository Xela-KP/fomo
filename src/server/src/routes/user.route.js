import e from 'express';
import {
    root,
    test,
    putBio,
    putAbout,
    user,
    patchLinks,
} from '../controllers/user.controller.js';

const router = e.Router();

router.get('/', root);
router.get('/user', user);
router.get('/test', test);

router.put('/user/:id/bio', putBio);
router.put('/user/', putAbout);
router.patch('/user/', patchLinks);

export default router;
