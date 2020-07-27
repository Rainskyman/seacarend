'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
   
   var list=  await  this.service.login.getAlldata()
    console.log(list);
    this.ctx.body="登录"
    
  }
}

module.exports = LoginController;
