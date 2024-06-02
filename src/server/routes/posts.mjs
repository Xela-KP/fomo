import express from 'express';
const router = express.Router();
router.get('/', (request, response) => {
    response.send('This Works');
});
export default router;
