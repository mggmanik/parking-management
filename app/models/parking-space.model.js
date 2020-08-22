const mongoose = require('mongoose');
Schema = mongoose.Schema;

const ParkingSpaceSchema = new mongoose.Schema({
    space_title: {
        type: String,
        required: true
    },
    zone_id: {
        type: Schema.ObjectId,
        ref: 'parkingZones',
        required: 'Zone ID is required!'
    },
    status: {
        type: String,
        default: "vacant",
        enum: ["vacant", "ocuupied"]
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

module.exports = mongoose.model('parkingSpaces', ParkingSpaceSchema);