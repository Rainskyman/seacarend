'use strict';

const Service = require('egg').Service;

class LoginService extends Service {
  async index() {
    var list =[1,2,3,4,5,6]
    return list
  }

  async isuser() {
    let result = await this.app.mysql.select('users')
    return result
  }
}

module.exports = LoginService;
