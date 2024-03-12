import express from 'express';
// Express karkaso iniciavimas
const app = express();

// NORINT PRIIMTI DUOMENIS URLENCODED FORMATU REGISTRUOJAMA EILUTĖ
app.use(express.urlencoded({
    extended: true
}));

// Kelio registravimas (Route)
// CRUD:
// CREATE - POST
// READ - GET
// UPDATE - PUT
// DELETE - DELETE

// galimi metodai:
// .get() - GET HTTP metodas (GET metodu pateikiant užklausą body duomenys nėra persiunčiami)
// .post() - POST HTTP metodas
// .put() - PUT HTTP metodas
// .delete() - DELETE HTTP metodas

// Pirmas parametras: kelias (route), endpoint
// Antras parametras: funkcija kuri bus iššaukiama vartotojui atėjus nurodytu keliu
app.get('/', (req, res) => {
    // Į funkciją priimami du parametrai:
    // req - Request (Užklausa)
    // res - Response (Atsakymas)
    console.log('Funkcija aktyvuota');
    // Teksto 'Hello World' grąžinimas vartotojui (client)
    res.send('<h1>Titulinis puslapis pakeistas</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>Apie Mus</h1>');
});

// Query parametrų prėmimas
app.get('/query', (req, res) => {
    // req.query - Query parametrai nugula req objekte su query raktažodžiu 
    // console.log(req.query);
    res.send(`
        <li>Daina: ${req.query.song}</li>
    `);
});

// POST http metodu perduodamų duomenų priėmimas
app.post('/post', (req, res) => {
    // req.body grąžina body lygmenyje persiųstus duomenis
    console.log(req.body);

    if(req.body.song === 'Live forever') {
        console.log('Kondicija teigiama');
    }

    res.send(`
        <li>Filmas: ${req.body.movie ? req.body.movie : 'Nerasta'}</li>
        <li>Daina: ${req.body.song ? req.body.song : 'Nerasta'}</li>
    `);
});

// PERDUOTŲ DUOMENŲ TIKRINIMAS
app.post('/check', (req, res) => {
    if(req.body.name === 'Laimis') {
        res.send('Administratorius');
    } else {
        res.send('Vartotojas');
    }
});

// Serverio paleidimas port'e 3001
app.listen(3001);