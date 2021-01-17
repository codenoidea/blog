import Mongoose from 'mongoose';
// import * as config from '../config';

// Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1:27017/blog';
Mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
Mongoose.Promise = global.Promise;
// Get the default connection
const db = Mongoose.connection;

export default db;