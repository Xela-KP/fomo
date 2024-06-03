import mongoose from 'mongoose';

export default new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        postID: {
            type: String,
            required: true,
        },
        userID: {
            type: String,
            required: true,
        },
        likes: {
            type: Array,
            default: [],
        },
        numLikes: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);
