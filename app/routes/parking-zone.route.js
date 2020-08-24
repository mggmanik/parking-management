const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');

const parkingZoneController = require('../controllers/parking-zone.controller');
const userController = require('../controllers/user.controller');

// post
router.route('/create').post(auth, userController.isAgent, parkingZoneController.create);

// get
router.route('/list').get(auth, parkingZoneController.fetch);

module.exports = router;