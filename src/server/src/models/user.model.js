import mongoose from 'mongoose';

export default new mongoose.Schema(
    {
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
        profilePicture: {
            type: String,
            default:
                'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);
