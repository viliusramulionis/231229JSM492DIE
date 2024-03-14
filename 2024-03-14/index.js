import express from 'express';
import mongoose from 'mongoose';
import user from './controller/user.js';
import upload from './middleware/multer.js';

// MVC:
// Model - Atsakingas už informacijos paėmimą iš duomenų bazės
// View  - Atsakingas už iš controlerio gautos informacijos atvaizdavimą
// Controller - Atsakingas už modelio informacijos apdorojimą

// Prisijungimas prie mongodb duomenų bazės pavadinimu: pirma_duombaze
await mongoose.connect('mongodb://localhost:27017/pirma_duombaze');

// Aplikacijos iniciavimas
const app = express();

// Perduodamų reikšmių urlencoded formatu paėmimo nustatymas
app.use(express.urlencoded({
    extended: true
}));

// Failų pasiekiamumo priskyrimas nurodant:
// Pirmu parametru - url kelią
// Antra parametru - direktoriją kurioje saugomi failai
app.use('/files/', express.static('./uploads'));

// Controlerio (Validklis) registravimas
app.use('/users/', user);

// Middleware priskyrimas
// upload.single() - naudojamas vienam failui ikelti
// upload.array() - naudojamas keliems failams ikelti
// upload.fields() - naudojamas keliems failams skirtingomis name reiksmemis 
// Nurodomi laukelių pavadinimai (name) ir pasirinktinai maksimalus kiekis
// upload.fields([{ name: 'nuotrauka', maxCount: 2 }, { name: 'failas', maxCount: 2 } ])

app.post('/files', upload.fields([{ name: 'nuotrauka', maxCount: 2 }, { name: 'failas', maxCount: 2 } ]), (req, res) => {
    res.send('Failas sėkmingai įkeltas');
});

// Serverio paleidimas 3000 porte
app.listen(3000);