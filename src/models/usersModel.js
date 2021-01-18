'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  id: Schema.ObjectId,
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  updated: {
    type: Date,
    default: Date.now
  },
  age: {
    type: Number,
    min: 18,
    max: 65
  },
});

const UsersModel = mongoose.model('users', UsersSchema);

module.exports.create = async (params) => {
  // const users = new UsersModel(params);
  return await UsersModel.create(params);
}