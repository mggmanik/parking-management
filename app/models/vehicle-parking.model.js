const mongoose = require('mongoose');
Schema = mongoose.Schema;

const vehicleParkingSchema = new mongoose.Schema({
    zone_id: {
        type: Schema.ObjectId,
        ref: 'parkingZones',
        required: 'Zone ID is required!'
    },
    space_id: {
        type: Schema.ObjectId,
        ref: 'parkingSpaces',
        required: 'Space ID is required!'
    },
    vehicle_reg_num: {
        type: String
    },
    booking_date_time: {
        type: Date,
        required: true
    },
    release_date_time: {
        type: Date
    },
    updated: {
        type: Date,
        default: Date.now
    },
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('vehicleParking', vehicleParkingSchema);