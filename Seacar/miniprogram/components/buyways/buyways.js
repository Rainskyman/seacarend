// components/buyways/buyways.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    shoplist: {
      type: Array,
      value: []
    },
    wtype:{
      type:Number,
      value:1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    ispin: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showhot() {
      this.setData({
        ispin: false
      })
    },
    showpin() { 
      this.setData({
        ispin: true
      })
    },

  }
})
