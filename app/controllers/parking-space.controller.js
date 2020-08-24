const parkingSpace = require('../models/parking-space.model');

// create parking space
exports.create = async (req, res) => {
    try {
        space = new parkingSpace(req.body);
        await space.save();
        res.status(200).json({
            message: 'New Space Created!',
            data: space
        });
    }
    catch (err) {
        res.status(500).json({
            message: err
        })
        return;
    }
}

// fetch parking spaces
exports.fetch = async (req, res) => {
    try {
        const spaces = await parkingSpace.find().sort({ space_title: 1 });

        res.status(200).json({
            message: 'List of Spaces',
            data: spaces,
        })

    } catch (error) {
        res.status(500).json({
            message: error
        })
        return;
    }
}

// fetch parking spaces by parking zone ID
exports.filterByZoneID = async (req, res) => {
    let findQuery = {};
    if (req.body.zoneID) {
        findQuery.zone_id = req.body.zoneID;
    }
    try {
        const spaces = await parkingSpace.find(findQuery).sort({ space_title: 1 });
        res.status(200).json({
            message: 'List of Spaces',
            data: spaces,
        })
    }
    catch (error) {
        res.status(500).json({
            message: error
        })
        return;
    }
}

// update single parking space
exports.update = async (req, res) => {
    var set = {};
    const id = req.params._id
    if (!id) {
        res.status(404).json({
            message: "No Space ID"
        })
        return;
    }
    set = req.body
    set.updated = Date.now()

    try {
        await parkingSpace.updateOne({ _id: id }, { $set: set }, function (err, reply) {
            if (err) {
                res.status(400).json({
                    message: err
                })
                return;
            }
            else {
                res.status(200).json({
                    message: "updated successfully",
                    data: reply
                })
            }

        })
    }
    catch (err) {
        res.status(400).json({
            message: err
        })
        return;
    }
}

// update all parking spaces
exports.updateAll = async (req, res) => {
    var set = {};

    set = req.body
    set.updated = Date.now()
    try {
        await parkingSpace.updateMany({}, { $set: set }, function (err, reply) {
            if (err) {
                res.status(404).json({
                    message: err
                })
                return;
            }
            else {
                res.status(200).json({
                    message: "updated successfully",
                    data: reply
                })
            }

        })
    }
    catch (err) {
        res.status(404).json({
            message: err
        })
        return;
    }

}