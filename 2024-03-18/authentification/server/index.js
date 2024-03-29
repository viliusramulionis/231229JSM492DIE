import express from 'express';
import session from 'express-session';

const app = express();

app.set('trust proxy', true);

app.use(session({
    // Slaptos frazės nustatymas
    secret: 'labai slapta fraze',
    resave: false,
    saveUninitialized: true
}));

// Form urlencoded formatu priimami duomenys
app.use(express.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    // Tikriname ar vartotojas yra prisijungęs, jeigu ne, grąžinsime statusą 401 ir žinutę: "Turinys prieinamas tik registruotiems varotojams"
    // Jeigu taip: Tuomet grąžinsime statusą 200 ir pasisveikinimo žinutę: "Labas Pasauli"
    if(req.session.loggedIn) {
        res.json('Labas Pasauli');
    } else {
        res.status(401).json('Turinys prieinamas tik registruotiems varotojams');
    }
});

app.listen(3000);