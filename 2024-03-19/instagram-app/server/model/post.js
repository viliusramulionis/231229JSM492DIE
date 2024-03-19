import { Schema, model } from 'mongoose';
import Like from './like.js';

// ORM - Object Oriented Modeling

const postSchema = new Schema({
    photo: {
        type: String,
        max: 80,
        required: true
    },
    description: {
        type: String,
        max: 600
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    created_at: {
        type: Date,
        // Reikšmės pagal nutylėjimą priskyrimas, jei ši nėra siunčiama
        default: new Date()
    }
});

postSchema.virtual('likesNum', {
    ref: 'Like',
    localField: '_id',
    foreignField: 'post',
    count: true
});

const post = model('Post', postSchema);

export default post;