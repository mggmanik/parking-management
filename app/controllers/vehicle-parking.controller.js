const vehicleParking = require('../models/vehicle-parking.model');

exports.create = async (req, res) => {
    try {
        vParks = new vehicleParking(req.body);
        await vParks.save();
        res.status(200).json({
            message: 'New Space Created!',
            data: vParks
        });
    }
    catch (err) {
        res.status(500).json({
            message: err
        })
        return;
    }
}

exports.update = async (req, res) => {
    var set = {};
    const id = req.params._id
    if (!id) {
        res.status(404).json({
            message: "No Parking ID"
        })
        return;
    }
    set = req.body
    set.updated = Date.now()

    try {
        await vehicleParking.updateOne({ _id: id }, { $set: set }, function (err, reply) {
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

exports.deleteAll = async (req, res) => {
    try {
        await vehicleParking.deleteMany({}, function (err, reply) {
            if (err) {
                res.status(404).json({
                    message: err
                })
                return;
            }
            else {
                res.status(200).json({
                    message: "deleted successfully",
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