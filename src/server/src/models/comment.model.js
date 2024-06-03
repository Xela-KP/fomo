import mongoose from 'mongoose';

const schema = new mongoose.Schema(
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

const model = mongoose.model('Post', schema);

export default model;
