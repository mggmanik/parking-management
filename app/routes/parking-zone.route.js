const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');

const parkingZoneController = require('../controllers/parking-zone.controller');

router.route('/create').post(auth, parkingZoneController.create);

module.exports = router;