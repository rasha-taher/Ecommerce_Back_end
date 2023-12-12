const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.put('/edit/:id', userController.edit);
router.delete('/delete/:id', userController.deleteuser);
router.get('/findbyfullname', userController.finduserbyfullname);
router.get('/findbyemail/:email', userController.finduserbyemail);
router.get('/findbyid/:id', userController.finduserbyid);

module.exports = router;
