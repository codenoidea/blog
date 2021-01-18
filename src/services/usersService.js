'use strict'

import UserModel from '../models/usersModel';
import {
  BadRequest
} from '../utils/errors';

class UserService {
  async SignUp(user) {
    try {
      return await UserModel.create(user);
    } catch (e) {
      throw new BadRequest('Missing age');
    }
  }
}

export default new UserService();