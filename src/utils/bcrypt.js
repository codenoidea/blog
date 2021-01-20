'use strict'

import bcrypt from 'bcrypt';

class Bcrypt {
  constructor() {
    this.salt = 10;
  }

  genSalt() {
    return bcrypt.genSaltSync(this.salt);
  }

  hash(data) {
    const salt = this.genSalt();
    return bcrypt.hashSync(data, salt);
  }

  async compare(data, hash) {
    return await bcrypt.compareSync(data, hash);
  }
}

export default new Bcrypt();