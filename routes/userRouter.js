const router = require('express').Router();
const UserController = require('../controllers/UserController');

router.post('/signup', UserController.signup);
router.post('/login', UserController.login);
router.delete('/delete', UserController.delete);
//router.get('userprofile', UserController.userprofile);


module.exports = router;

