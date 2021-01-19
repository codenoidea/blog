'use strict'

import UserModel from '../models/usersModel';
import {
  BadRequest
} from '../utils/errors';

class UserService {
  async SignIn(user) {
    try {
      return await UserModel.SignIn({
        name: user.name
      });
    } catch (error) {
      throw error;
    }
  }

  async SignUp(user) {
    try {
      return await UserModel.SignUp(user);
    } catch (error) {
      throw error;
    }
  }
}

export default new UserService();