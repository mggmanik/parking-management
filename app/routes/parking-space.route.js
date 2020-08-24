const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');

const parkingSpaceController = require('../controllers/parking-space.controller');
const userController = require('../controllers/user.controller');

// post
router.route('/create').post(auth, userController.isAgent, parkingSpaceController.create);

// get
router.route('/list').get(auth, parkingSpaceController.fetch);

// filter by zone ID
router.route('/filter').post(auth, parkingSpaceController.filterByZoneID);

// update single parking space
router.route('/update/:_id').put(auth, userController.isAgent, parkingSpaceController.update);

// update all parking spaces
router.route('/updateAll').put(auth, userController.isAgent, parkingSpaceController.updateAll);

module.exports = router;