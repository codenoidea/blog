'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    id: Schema.ObjectId,
    name: String,
    password: String,
    updated: { type: Date, default: Date.now },
    age: { type: Number, min: 18, max: 65, required: true },
});

const UsersModel = module.exports = mongoose.model('Users', UsersSchema );

module.exports.save = async (params) => {
  let users = new UsersModel();
  users = params;
  await users.save();
}