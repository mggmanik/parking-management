const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');

const parkingSpaceController = require('../controllers/parking-space.controller');

router.route('/create').post(auth, parkingSpaceController.create);
router.route('/list').get(auth, parkingSpaceController.fetch);
router.route('/filter').post(auth, parkingSpaceController.filterByZoneID);
router.route('/update/:_id').put(auth, parkingSpaceController.update);
router.route('/updateAll').put(auth, parkingSpaceController.updateAll);

module.exports = router;