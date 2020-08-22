const parkingSpace = require('../models/parking-space.model');

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