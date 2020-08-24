const express = require("express");
const router = express.Router();

const userController = require('../controllers/user.controller');

// signup
router.route('/signup').post(userController.signup);

// login
router.route('/login').post(userController.login);

module.exports = router;