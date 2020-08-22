// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialize the app
let app = express();


// configure environment variable
require('dotenv').config();

const path = require('path')

// routes defined here
const userRoute = require("./app/routes/user.routes");
const parkingZoneRoute = require("./app/routes/parking-zone.route");
const parkingSpaceRoute = require("./app/routes/parking-space.route");

app.use(bodyParser.json({ limit: '100mb' }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers',
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    )
    res.setHeader('Access-Control-Allow-Methods',
        "GET, POST, PUT, DELETE, OPTIONS"
    )
    next()
})

// app.use(express.static(path.join(__dirname, '/build')))

// setting up mongoose

// Connect to Mongoose and set connection variable
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(`mongodb+srv://mggmanik:${process.env.MONGO_ATLAS_PW}@cluster0-seypl.mongodb.net/parking?retryWrites=true`);

var db = mongoose.connection;

// Added check for DB connection

if (!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

app.use("/api/v1/auth", userRoute);
app.use("/api/v1/parkingzone", parkingZoneRoute);
app.use("/api/v1/parkingspace", parkingSpaceRoute);

// Setup server port
var port = process.env.PORT || 3000;

// app.use((req, res) => {
//     res.sendFile(path.join(__dirname, "build", "index.html"))
// })

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running Parking Management on port " + port);
});