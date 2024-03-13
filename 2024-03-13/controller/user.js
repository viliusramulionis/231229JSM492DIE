import { Router } from 'express';
import User from '../model/user.js';

const router = Router();

router.get('/', async (req, res) => {
    // Visų įrašų grąžinimas
    res.send(await User.find());
});

router.get('/:id', async (req, res) => {
    // Vieno įrašo paėmimas

    // Norint paimti parametro reikšmę: req.params
    res.send(await User.findById(req.params.id));
});

router.post('/', async (req, res) => {
    // Naujo vartotojo sukūrimas
    
    await User.create(req.body);

    res.send('Įrašas išssaugotas');
});

// Įrašo atnaujinimas
router.put('/:id', async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body);

    res.send('Įrašas sėkmingai atnaujintas');
});

// Įrašo ištrynimas
router.delete('/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);

    res.send('Įrašas sėkmingai ištrintas');
});

export default router;