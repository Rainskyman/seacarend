// miniprogram/pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swimg: ['https://t00img-c.yangkeduo.com/goods/images/2019-12-08/552002205acad53baf7c5a28fd3bb7cd.jpeg', 'https://t00img-c.yangkeduo.com/goods/images/2019-12-08/552002205acad53baf7c5a28fd3bb7cd.jpeg', 'https://t00img-c.yangkeduo.com/goods/images/2019-12-08/552002205acad53baf7c5a28fd3bb7cd.jpeg', 'https://t00img-c.yangkeduo.com/goods/images/2019-12-08/552002205acad53baf7c5a28fd3bb7cd.jpeg'],
    hasact:false,
    show: false,
    show2:false,
    actions: [
      { name: 'M', color: 'red' },
      { name: 'L', color: 'red' },
      { name: 'XL', color: 'red' },
      { name: 'XXL', color: 'red' },
      { name: 'XXXL', color: 'red' },
      { name: '4XL', color: 'red' },
    ],
    actions2: [
      { name: '红色'},
      { name: '黑色'},
      { name: '灰色' },
      { name: '褐色' },
    ],
    sized:'请选择尺寸',
    colored:'请选择颜色',
    adressed:'未选择地址'

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  choosesize(){
    this.setData({
      show:true
    })
  },
  choosecolor(){
    this.setData({
      show2: true
    })
  },
  onClose() {
    this.setData({ show: false });
  },

  onSelect(event) {
    console.log(event.detail);
    this.setData({
      sized: event.detail.name
    })
  },
  onClose2() {
    this.setData({ show2: false });

  },

  onSelect2(event) {
    console.log(event.detail);
    this.setData({
      colored: event.detail.name
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})