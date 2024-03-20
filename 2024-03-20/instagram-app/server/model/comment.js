import { Schema, model } from 'mongoose';

const comment = model('Comment', new Schema({
    text: {
        type: String,
        maxLength: 160,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        refLength: 'User'
    },
    post: {
        type: Schema.Types.ObjectId,
        refLength: 'Post'
    },
    created_at: {
        type: Date,
        default: new Date()
    }
}));

export default comment;