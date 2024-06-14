import mongoose from 'mongoose';

export default async () => {
    try {
        await mongoose.connect(process.env.DATABASE);
        console.log('MongoDb is connected');
    } catch (err) {
        throw new Error(err);
    }
};
