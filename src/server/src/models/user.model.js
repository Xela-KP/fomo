import mongoose from 'mongoose';

export default new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        maxLength: 20,
        minLength: 3,
    },
    password: {
        type: String,
        required: true,
        maxLength: 20,
        minLength: 8,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
});
