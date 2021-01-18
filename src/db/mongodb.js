import Mongoose from 'mongoose';
import * as config from '../config';

// Set up default mongoose connection
const mongoDB = config.mongoDb;
Mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
Mongoose.Promise = global.Promise;
// Get the default connection
const db = Mongoose.connection;

export default db;