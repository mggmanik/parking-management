const mongoose = require('mongoose');
const ParkingZoneSchema = new mongoose.Schema({
    zone_title: {
        type: String,
        required: true
    },
    updated: {
        type: Date,
        default: Date.now
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('parkingZones', ParkingZoneSchema);