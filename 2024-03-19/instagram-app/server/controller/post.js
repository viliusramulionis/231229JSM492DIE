import { Router } from 'express';
import Post from '../model/post.js';
import upload from '../middleware/multer.js';

const router = Router();

// Grąžinamas visų post'ų sąrašas
router.get('/', (req, res) => {

});

// Naujo įrašo sukūrimas
router.post('/', upload.single('photo'), async (req, res) => {
    if(req.file)
        req.body.photo = req.file.filename;

    try {
        await Post.create(req.body);
        res.json('Įrašas sėkmingai išssaugotas');
    } catch {
        // Įvykus klaidai grąžiname klaidos kodą ir žinutę
        res.status(500).json('Įvyko klaida');
    }
});

export default router;