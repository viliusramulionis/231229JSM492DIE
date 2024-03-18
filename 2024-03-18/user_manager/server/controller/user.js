import { Router } from 'express';
import User from '../model/user.js';
import upload from '../middleware/multer.js';

const router = Router();

router.get('/', async (req, res) => {
    // Visų įrašų grąžinimas
    try {
        res.json(await User.find());
    } catch {
        res.status(500).json('Įvyko klaida');
    }
});

router.get('/:id', async (req, res) => {
    // Vieno įrašo paėmimas

    // Norint paimti parametro reikšmę: req.params
    try {
        res.json(await User.findById(req.params.id));
    } catch {
        res.status(500).json('Įvyko klaida');
    }
});

router.post('/', upload.single('photo'), async (req, res) => {
    // Naujo vartotojo sukūrimas
    try {
        req.body.photo = req.file?.filename;

        await User.create(req.body);
    
        res.json('Įrašas išssaugotas');
    } catch {
        res.status(500).json('Įvyko klaida');
    }
});

// Įrašo atnaujinimas
router.put('/:id', upload.single('photo'), async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.id, req.body);

        res.json('Įrašas sėkmingai atnaujintas');
    } catch {
        res.status(500).json('Ivyko klaida');
    }
});

// Įrašo ištrynimas
router.delete('/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);

        res.json('Įrašas sėkmingai ištrintas');
    } catch {
        res.status(500).json('Ivyko klaida');
    }
});

export default router;