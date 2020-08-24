const vehicleParking = require('../models/vehicle-parking.model');

// create vehicle parking booking
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

// update vehicle parking booking
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

// delete all vehicle parking bookings
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

// fetch parking reports on selectes booking date time
exports.reports = async (req, res) => {
    try {
        await vehicleParking.aggregate([
            {
                $match: {
                    booking_date_time: { $gte: new Date(req.body.start), $lt: new Date(req.body.end) }
                }
            },
            {
                $lookup:
                {
                    from: 'parkingspaces',
                    localField: 'space_id',
                    foreignField: '_id',
                    as: 'spaceDetails'
                }
            },
            {
                $lookup:
                {
                    from: 'parkingzones',
                    localField: 'zone_id',
                    foreignField: '_id',
                    as: 'zoneDetails'
                }
            },
            {
                $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$spaceDetails", 0] }, { $arrayElemAt: ["$zoneDetails", 0] }, "$$ROOT"] } }
            },
            { $project: { spaceDetails: 0 } },
            { $project: { zoneDetails: 0 } },
            { $sort: { space_title: 1 } }
        ], function (err, result) {
            if (err) throw err;
            res.status(200).json({
                message: 'List for Reports',
                data: result
            })
        })
    }
    catch (err) {
        console.log(err)
        res.status(404).json({
            message: err
        })
        return;
    }
}