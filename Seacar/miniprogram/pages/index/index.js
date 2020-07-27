//index.js
const app = getApp()

Page({
  data: {
    a: "相信你还在这里从不曾离去，我的爱像天使守护你，若是你知道这里，从此没有我我会找个天使替我去爱你!",
    swimg: ['../../images/Windex/1.jpg', '../../images/Windex/2.jpg', '../../images/Windex/3.jpg', '../../images/Windex/4.jpg'],
    recommend: [{
        imgurl: "https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png",
        title: '每日推荐',
        way: 'upimg',
        url:'/pages/Itday/Itday'
      },
      {
        imgurl: "https://s10.mogucdn.com/mlcdn/c45406/180913_25e804lk773hdk695c60cai492111_225x225.png",
        title: '秒杀秒杀',
        way: 'upvid',
        url: '/pages/Itsec/Itsec'

      },
      {
        imgurl: "https://s10.mogucdn.com/mlcdn/c45406/180913_387kgl3j21ff29lh04181iek48a6h_225x225.png",
        title: '海外直购',
        way: 'resbin',
        url: '/pages/Itsea/Itsea'

      },
      {
        imgurl: "https://s10.mogucdn.com/mlcdn/c45406/180913_8d4e5adi8llg7c47lgh2291akiec7_225x225.png",
        title: '亮眼穿搭',
        way: 'otherways',
        url: '/pages/Iteye/Iteye'

      }
    ],
    shoplist:[
      {
        shopimg: ['https://t00img-c.yangkeduo.com/goods/images/2019-12-08/552002205acad53baf7c5a28fd3bb7cd.jpeg'],
        title:'当季女装',
        desc:'大牌正品，时尚设计，舒适体验，低价抢购1折起，心动不如行动！APP专享，实惠不断!',
        isme:true,
        price:'199',
        nprice:'99',
        count:'99999',
      }
    ],
    ishas:true
  },

  onLoad: function() {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },

  onGetUserInfo: function(e) {
    if (!this.data.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  onGetOpenid: function() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        wx.navigateTo({
          url: '../userConsole/userConsole',
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },

  // 上传图片
  doUpload: function() {
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {

        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePaths[0]

        // 上传图片
        const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath

            wx.navigateTo({
              url: '../storageConsole/storageConsole'
            })
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },

})