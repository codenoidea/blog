'use strict'

import UserModel from '../models/usersModel';

class UserService {
  async SignUp(user) {
    try {
      return await UserModel.save(user);
    } catch (e) {
      throw e;
    }
  }
}

export default new UserService();