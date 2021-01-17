'use strict'

import UserModel from '../models/usersModel';

export default class UserService {

  constructor() {
    console.loog(1);
  }
  async SignUp(user) {
    const userRecord = await UserModel.save(user);
    return {
      user: userRecord,
      company: companyRecord
    }
  }
}