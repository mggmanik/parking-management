const parkingZone = require('../models/parking-zone.model');

exports.create = async (req, res) => {
    try {
        zone = new parkingZone(req.body);
        await zone.save();
        res.status(200).json({
            message: 'New Zone Created!',
            data: zone
        });
    }
    catch (err) {
        res.status(500).json({
            message: err
        })
        return;
    }
}

exports.fetch = async (req, res) => {
    try {
        const zones = await parkingZone.find();

        res.status(200).json({
            message: 'List of Zones',
            data: zones,
        })

    } catch (error) {
        res.status(500).json({
            message: error
        })
        return;
    }
}