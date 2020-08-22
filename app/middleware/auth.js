const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    //get the token from the header if present
    token = req.headers.authorization
    //if no token found, return response (without going to the next middelware)
    if (!token) {
        res.status(400).json({
            message: "User not logged in !"
        })
        return;
    }

    try {
        //if can verify the token, set req.user and pass to next middleware
        const decoded = jwt.verify(token, process.env.ACCESS_SECRET_TOKEN);
        req.user = decoded;

        next();
    } catch (ex) {
        //if invalid token
        res.status(400).json({
            message: ex
        })
        return;
    }
};