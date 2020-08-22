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