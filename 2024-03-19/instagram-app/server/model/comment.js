import { Schema, model } from 'mongoose';

const comment = model('Comment', new Schema({
    text: {
        type: String,
        max: 160,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    },
    created_at: {
        type: Date,
        default: new Date()
    }
}));

export default comment;