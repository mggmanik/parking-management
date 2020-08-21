const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {

    if (req.body.email && req.body.email != "") {
        let users_email = await User.findOne({ email: req.body.email });
        if (users_email) {
            res.status(400).json({
                message: "Email already Exists !"
            });
            return;
        }
    }
    try {
        user = new User(req.body);
        user.password = await bcrypt.hash(user.password, 10);
        await user.save();
        let token = jwt.sign({ name: user.name, role: user.role, _id: user._id },
            process.env.ACCESS_SECRET_TOKEN,
            {
                expiresIn: '24h' // expires in 24 hours
            }
        );

        res.status(201).json({
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            Authorization: token
        });
    }
    catch (error) {
        res.status(500).json({
            err: error
        })
        return;
    }
}

exports.login = async (req, res) => {
    var findQuery;
    if (req.body.email && req.body.email != "") {
        findQuery = {
            email: req.body.email.toLowerCase()
        }
    }
    try {
        const user = await User.findOne(findQuery);
        if (!user) {
            res.status(404).json({
                message: "Invalid Credentials..User not found!"
            })
            return;
        }
        const result = await bcrypt.compare(req.body.password, user.password)
        if (!result) {
            res.status(404).json({
                message: "Invalid Credentials..User not found!"
            })
            return;
        }
        let token = jwt.sign({ name: user.name, role: user.role, _id: user._id },
            process.env.ACCESS_SECRET_TOKEN,
            {
                expiresIn: '24h'
            }
        );
        // return the JWT token for the future API calls
        res.status(200).send({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            Authorization: token,
        });
    }
    catch (error) {
        res.status(500).json({
            err: error
        })
        return;
    }
}