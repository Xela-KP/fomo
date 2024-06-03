import dotenv from 'dotenv';
import mongoose from 'mongoose';
import e from 'express';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import { errorHandler } from './controllers/error.controller.js';

dotenv.config();

(async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('MongoDb is connected');
    } catch (err) {
        throw new Error(err);
    }
})();

const app = e();
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
app.use(e.json());
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use(errorHandler);
