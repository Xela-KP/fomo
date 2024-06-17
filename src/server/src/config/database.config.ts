import mongoose from 'mongoose';

export default async () => {
    try {
        if (!process.env['DATABASE'])
            throw new Error('Cannot resolve database URI');
        await mongoose.connect(process.env['DATABASE']);
        console.log('MongoDb is connected');
    } catch (err: any) {
        throw new Error(err);
    }
};
