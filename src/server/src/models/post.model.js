import mongoose from 'mongoose';
const schema = new mongoose.Schema(
    {
        post: {
            userID: {
                type: String,
                required: true,
            },
            content: {
                type: String,
                required: true,
                unique: true,
            },
            media: {
                type: String,
                default: null,
            },
            category: {
                type: String,
                required: true,
                default: 'uncategorized',
            },
            slug: {
                type: String,
                unique: true,
            },
        },
    },
    { timestamps: true }
);

const model = mongoose.model('Post', schema);

export default model;
