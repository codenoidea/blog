'use strict'

import mongoose from 'mongoose';
import blogsModel from '../models/blogsModel';
import {
  BadRequest
} from '../utils/errors';

class BlogsService {
  async list(req) {
    try {
      const {
        user
      } = req;
      return await blogsModel.list(user);
    } catch (error) {
      throw error;
    }
  }

  async create(data) {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
      const result = await blogsModel.create(data, session);
      await session.commitTransaction();
      console.log(1)
      return result;
    } catch (error) {
      console.log(2)
      await session.abortTransaction();
      throw error;
    } finally {
      console.log(3)
      session.endSession();
    }
  }
}

export default new BlogsService();