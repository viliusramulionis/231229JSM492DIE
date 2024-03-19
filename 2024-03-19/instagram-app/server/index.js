import express from 'express';
import session from 'express-session';
import mongoose from 'mongoose';
import cors from 'cors';
import users from './controller/user.js';
import posts from './controller/post.js';
import comments from './controller/comment.js';

await mongoose.connect('mongodb://localhost:27017/instagram');

const app = express();

app.set('trust proxy', true);

// CORS apsaugos nuėmimas
app.use(cors());

// Sesijos sukūrimas
app.use(session({
    // Slaptos frazės nustatymas
    secret: 'labai slapta fraze',
    resave: false,
    saveUninitialized: true
}));

// Nustatymas gauti duomenis x-www-form-urlenced formatu
app.use(express.urlencoded({
    extended: true
}));

// Nustatymas gauti duomenis JSON formatu
app.use(express.json());

app.get('/', (req, res) => {
    // Tikriname ar vartotojas yra prisijungęs, jeigu ne, grąžinsime statusą 401 ir žinutę: "Turinys prieinamas tik registruotiems varotojams"
    // Jeigu taip: Tuomet grąžinsime statusą 200 ir pasisveikinimo žinutę: "Labas Pasauli"
    if(req.session.loggedIn) {
        res.json('Labas Pasauli');
    } else {
        res.status(401).json('Turinys prieinamas tik registruotiems varotojams');
    }
});

// Kontrolerių registracija
app.use('/users', users);
app.use('/posts', posts);
app.use('/comments', comments);

// Failų atvaizdavimui kreipiantis į route'ą uploads
app.use('/uploads', express.static('./uploads'));

app.listen(3000);