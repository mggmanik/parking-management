const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');

const parkingSpaceController = require('../controllers/parking-space.controller');

router.route('/create').post(auth, parkingSpaceController.create);

module.exports = router;