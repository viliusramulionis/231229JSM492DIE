import { Schema, model } from 'mongoose';

// ORM - Object Oriented Modeling
const post = model('Post', new Schema({
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
}));

export default post;