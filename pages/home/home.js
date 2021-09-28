// pages/home/home.js

//getAPP()获取App()产生的示例对象
const app = getApp()
console.log(app.globalData.name)
const name = app.globalData.name
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
  },
  handleInput(e){
    //console.log(e.detail.value)
    this.setData({
      num:e.detail.value
    })
  },
  handletap(e){
   console.log(e)
   
  },
  handleGetuserinfo(event){
    console.log(event)
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },

  
})