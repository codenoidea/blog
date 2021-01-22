'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import {
  BadRequest
} from '../utils/errors';

const BlogsSchema = new Schema({
  id: Schema.ObjectId,
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  },
});

const BlogsModel = mongoose.model('blogs', BlogsSchema);

module.exports.create = async (params, session) => {
  try {
    return await BlogsModel.create([params], {
      session: session
    });
  } catch (error) {
    console.error(error);
    throw new BadRequest('생성시 오류가 발생했습니다.');
  }
}