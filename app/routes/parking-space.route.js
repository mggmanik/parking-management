const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');

const parkingSpaceController = require('../controllers/parking-space.controller');

router.route('/create').post(auth, parkingSpaceController.create);
router.route('/updateAll').put(auth, parkingSpaceController.updateAll);

module.exports = router;