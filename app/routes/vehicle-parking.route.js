const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');

const vehicleParkingController = require('../controllers/vehicle-parking.controller');

router.route('/create').post(auth, vehicleParkingController.create);
router.route('/update:_id').put(auth, vehicleParkingController.update);

module.exports = router;