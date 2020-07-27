'use strict';

const Controller = require('egg').Controller;

class NewController extends Controller {
  async index() {
    this.ctx.body='新闻'
  }

  async detail() {

    // 获取get传值
      var query = this.ctx.query
      console.log(query);
      

    this.ctx.body='新闻详情'
  }

  async newdetail() {

    // 动态路由
      var params = this.ctx.params
      console.log(params);
      

    this.ctx.body='新闻列表'
  }
}

module.exports = NewController;
