import e from 'express';
import { root, test, user } from '../controllers/user.controller.js';

const router = e.Router();

router.get('/', root);
router.get('/user', user);
router.get('/test', test);
export default router;
