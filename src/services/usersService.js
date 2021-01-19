'use strict'

import UserModel from '../models/usersModel';
import {
  BadRequest
} from '../utils/errors';
import Bcrypt from '../utils/bcrypt';

class UserService {
  async SignIn(user) {
    try {
      const userResult = await UserModel.SignIn({
        name: user.name
      });
      console.log(userResult[0].password, user.password)
      if (await Bcrypt.compare(user.password, userResult[0].password)) {
        throw new BadRequest('비밀번호를 확인해주세요');
      }
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