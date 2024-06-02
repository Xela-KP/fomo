import e from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';

dotenv.config();
const app = e();
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
app.use('/api/users', userRoutes);