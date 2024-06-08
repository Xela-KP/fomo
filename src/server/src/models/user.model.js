import mongoose from 'mongoose';

const schema = new mongoose.Schema(
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
        bio: String,
        about: String,
        links: [String],
    },
    { timestamps: true }
);

const model = mongoose.model('User', schema);

export default model;
