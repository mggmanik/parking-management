const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');

const parkingZoneController = require('../controllers/parking-zone.controller');
const userController = require('../controllers/user.controller');

router.route('/create').post(auth, userController.isAgent, parkingZoneController.create);
router.route('/list').get(auth, parkingZoneController.fetch);

module.exports = router;