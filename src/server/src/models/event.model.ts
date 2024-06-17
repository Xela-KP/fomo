import mongoose, { Schema } from 'mongoose';
const schema = new Schema(
    {
        hostId: {
            type: String,
            required: true,
        },
        summary: {
            type: String,
        },
        description: {
            type: String,
            default: null,
            required: true,
        },
        visibility: {
            type: String,
            required: true,
            default: 'uncategorized',
        },
        location: {
            type: Location,
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: true,
        },
    },
    { timestamps: true }
);

const EventModel = mongoose.model('Event', schema);
export default EventModel;
