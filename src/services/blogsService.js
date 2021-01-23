'use strict'

import mongoose from 'mongoose';
import blogsModel from '../models/blogsModel';
import {
  BadRequest
} from '../utils/errors';

class BlogsService {
  async update(req) {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
      const {
        user,
        body,
        params,
      } = req;
      const data = {
        query: {
          _id: params.id,
          userId: user.userId
        },
        update: body,
      }
      const result = await blogsModel.update(data, session);
      if (result === null) {
        throw new BadRequest('잘못된 데이터입니다.');
      }
      await session.commitTransaction();
      return result;
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  }

  async read(req) {
    try {
      const {
        params
      } = req;
      return await blogsModel.read(params);
    } catch (error) {
      throw error;
    }
  }

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

  async create(req) {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
      const {
        user,
        body
      } = req;
      body.userId = user.userId;
      const result = await blogsModel.create(body, session);
      await session.commitTransaction();
      return result;
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  }
}

export default new BlogsService();