import mongoose, { Document, Schema } from 'mongoose';

import Event from '../../../shared/models/Event.js';

export interface EventDocument extends Event, Document {}
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

const EventModel = mongoose.model<EventDocument>('Event', schema);
export default EventModel;
