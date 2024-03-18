import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import user from './controller/user.js';

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

// Leidimo kreiptis į serverį iš kito adreso priskyrimas
app.use(cors());

// Failų pasiekiamumo priskyrimas nurodant:
// Pirmu parametru - url kelią
// Antra parametru - direktoriją kurioje saugomi failai
app.use('/files/', express.static('./uploads'));

// Controlerio (Validklis) registravimas
app.use('/users/', user);


app.post('/test', (req, res) => {
    console.log(req.rawHeaders);
});
// Serverio paleidimas 3000 porte
app.listen(3000);