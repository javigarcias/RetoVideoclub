const router = require('express').Router();
const FilmController = require('../controllers/FilmController');

router.get('/', FilmController.getAll);
router.get('/:id', FilmController.getById);
router.get('/:title', FilmgitController.getByTitle);



module.exports = router;


