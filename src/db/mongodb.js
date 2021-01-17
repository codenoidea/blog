//Import the mongoose module
const mongoose = require('mongoose');
const config = require('../config');

//Set up default mongoose connection
const mongoDB = config.mongoDb;
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
const db = mongoose.connection;

module.exports = db;