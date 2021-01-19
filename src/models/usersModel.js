'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import {
  BadRequest
} from '../utils/errors';

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

module.exports.SignIn = async (params) => {
  try {
    return await UsersModel.find(params);
  } catch (error) {
    throw new BadRequest(['SignIn error', e]);
  }
}

module.exports.SignUp = async (params) => {
  try {
    return await UsersModel.create(params);
  } catch (error) {
    throw new BadRequest(['SignUp error', error]);
  }

}