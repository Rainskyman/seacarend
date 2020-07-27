'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(this.config.api);
    
    ctx.body = 'hi, egg';
  }
  
  async hello(){
    const { ctx } = this;

    ctx.body = 'hello, egg';
  }
}

module.exports = HomeController;
