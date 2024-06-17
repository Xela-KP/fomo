import mongoose, { Document, Schema } from 'mongoose';

import User from '../../../shared/models/User.js';

export interface UserDocument extends User, Document {}
const schema = new Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        pfp: {
            type: String,
            required: true,
            default:
                'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        },
        bio: { type: String, default: '' },
        about: { type: String, default: '' },
        links: { type: [String], default: [] },
    },
    { timestamps: true }
);

const UserModel = mongoose.model<UserDocument>('User', schema);
export default UserModel;
