'use strict'

import UserModel from '../models/usersModel';
import {
  BadRequest
} from '../utils/errors';
import Bcrypt from '../utils/bcrypt';

async function comparePassword(user, result) {
  if (!await Bcrypt.compare(user.password, result.password)) {
    throw new BadRequest('비밀번호를 확인해주세요');
  }
}

class UserService {
  async SignIn(user) {
    try {
      const userResult = await UserModel.SignIn({
        name: user.name
      });
      await comparePassword(user, userResult[0]);
      return userResult;
    } catch (error) {
      throw error;
    }
  }

  async SignUp(user) {
    try {
      user.password = Bcrypt.hash(user.password);
      return await UserModel.SignUp(user);
    } catch (error) {
      throw error;
    }
  }
}

export default new UserService();