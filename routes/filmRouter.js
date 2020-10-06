const router = require('express').Router();
const FilmController = require('../controllers/FilmController');

router.get('/', FilmController.getAll);
router.get('/:id', FilmController.getById);
router.get('/title/:title', FilmController.getByTitle);
router.post('/', FilmController.create);



module.exports = router;


