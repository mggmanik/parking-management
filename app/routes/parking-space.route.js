const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');

const parkingSpaceController = require('../controllers/parking-space.controller');
const userController = require('../controllers/user.controller');

router.route('/create').post(auth, userController.isAgent, parkingSpaceController.create);
router.route('/list').get(auth, parkingSpaceController.fetch);
router.route('/filter').post(auth, parkingSpaceController.filterByZoneID);
router.route('/update/:_id').put(auth, userController.isAgent, parkingSpaceController.update);
router.route('/updateAll').put(auth, userController.isAgent, parkingSpaceController.updateAll);

module.exports = router;