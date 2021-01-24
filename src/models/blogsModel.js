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
  userId: {
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

BlogsSchema.pre('updateOne', function () {
  console.log('updateOne !!');
  this.updateOne({}, {
    $set: {
      updated: new Date().toISOString()
    }
  });
});

BlogsSchema.pre('deleteOne', function () {
  console.log('deleteOne !!');
});

const BlogsModel = mongoose.model('blogs', BlogsSchema);

export async function remove(data, session) {
  try {
    const result = await BlogsModel.deleteOne(data.query, session);
    if (result.n === 0) {
      throw new BadRequest('잘못된 접근입니다.');
    }
    return true;
  } catch (error) {
    console.error(error);
    throw error || new BadRequest('삭제시 오류가 발생했습니다.');
  }
}

export async function update(data, session) {
  try {
    const result = await BlogsModel.updateOne(data.query, data.update, session);
    if (result.n === 0) {
      throw new BadRequest('잘못된 접근입니다.');
    }
    return true;
  } catch (error) {
    console.error(error);
    throw error || new BadRequest('저장시 오류가 발생했습니다.');
  }
};

export async function read(params) {
  try {
    return await BlogsModel.findOne({
      _id: params.id
    });
  } catch (error) {
    throw new BadRequest('상세를 가져오지 못했습니다.');
  }
}

export async function list(user) {
  try {
    return await BlogsModel.find({
      userId: user.userId
    });
  } catch (error) {
    throw new BadRequest('목록을 가져오지 못했습니다.');
  }
}

export async function create(params, session) {
  try {
    return await BlogsModel.create([params],
      session
    );
  } catch (error) {
    console.error(error);
    throw new BadRequest('생성시 오류가 발생했습니다.');
  }
}