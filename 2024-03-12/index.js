import express from 'express';
// Express karkaso iniciavimas
const app = express();

// Kelio registravimas (Route)
// CRUD:
// CREATE - POST
// READ - GET
// UPDATE - PUT
// DELETE - DELETE

// galimi metodai:
// .get() - GET HTTP metodas
// .post() - POST HTTP metodas
// .put() - PUT HTTP metodas
// .delete() - DELETE HTTP metodas

// Pirmas parametras: kelias (route)
// Antras parametras: funkcija kuri bus iššaukiama vartotojui atėjus nurodytu keliu
app.get('/', function (req, res) {
    // Į funkciją priimami du parametrai:
    // req - Request (Užklausa)
    // res - Response (Atsakymas)
    console.log('Funkcija aktyvuota');
    // Teksto 'Hello World' grąžinimas vartotojui (client)
    res.send('Titulinis puslapis pakeistas');
});

// Serverio paleidimas port'e 3001
app.listen(3001);