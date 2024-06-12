import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import e from 'express';
import { errorHandler } from './utils/error.util.js';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js';

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
app.use(cookieParser());
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use(errorHandler);
