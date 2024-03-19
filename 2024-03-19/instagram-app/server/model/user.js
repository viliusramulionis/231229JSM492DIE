import { Schema, model } from 'mongoose';

const user = model('User', new Schema({
    user_name: {
        // Tipo priskyrimas
        type: String,
        // Nurodome, jog vartotojo vardas turės būti nesikartojantis visoje kolekcijoje
        unique: true,
        // Vartotojo vardas minimum trijų simbolių ilgio
        min: 3,
        // Maksimum 50
        max: 50,
        // Nurodymas, jog reikšmė bus reikalaujama
        required: true
    },
    photo: {
        type: String,
        max: 80
    },
    bio: {
        type: String,
        max: 180
    },
    email: {
        type: String,
        min: 5,
        max: 100,
        unique: true,
        required: true
    },
    password: {
        type: String,
        min: 6,
        max: 100,
        required: true
    },
    created_at: {
        type: Date,
        // Reikšmės pagal nutylėjimą priskyrimas, jei ši nėra siunčiama
        default: new Date()
    }
}));

export default user;