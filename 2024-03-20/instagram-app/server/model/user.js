import { Schema, model } from 'mongoose';

const user = model('User', new Schema({
    user_name: {
        // Tipo priskyrimas
        type: String,
        // Nurodome, jog vartotojo vardas turės būti nesikartojantis visoje kolekcijoje
        unique: true,
        // Vartotojo vardas minimum trijų simbolių ilgio
        minLength: 3,
        // Maksimum 50
        maxLength: 50,
        // Nurodymas, jog reikšmė bus reikalaujama
        required: true
    },
    photo: {
        type: String,
        maxLength: 80
    },
    bio: {
        type: String,
        maxLength: 180
    },
    email: {
        type: String,
        minLength: 5,
        maxLength: 50,
        unique: true,
        required: true
    },
    password: {
        type: String,
        minLength: 6,
        maxLength: 18,
        required: true
    },
    created_at: {
        type: Date,
        // Reikšmės pagal nutylėjimą priskyrimas, jei ši nėra siunčiama
        default: new Date()
    }
}));

export default user;