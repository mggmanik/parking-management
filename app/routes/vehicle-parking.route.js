const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');

const vehicleParkingController = require('../controllers/vehicle-parking.controller');
const userController = require('../controllers/user.controller');

// post
router.route('/create').post(auth, userController.isAgent, vehicleParkingController.create);
router.route('/update/:_id').put(auth, userController.isAgent, vehicleParkingController.update);

// delete
router.route('/deleteAll').delete(auth, userController.isAgent, vehicleParkingController.deleteAll);

// reports
router.route('/reports').post(auth, vehicleParkingController.reports);

module.exports = router;