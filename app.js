// app.js
//注册一个小程序示例
App({
  //生命周期函数：后台存活2小时
  onLaunch:function (){
    console.log('小程序初始化完成：onlauch')
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    //异步调用-
    // wx.getUserInfo({
    //   //数据拿到之后，在进行回调
    //   success: function(res){
    //     console.log(res)
    //   }
    // })


  },
  //小程序界面显示出来之后会执行的生命周期函数
  onShow:function(options){
    console.log('这里是onshow')
    //console.log(options)
    switch(options.scene){
      //判断小程序的进入场景
      case 1001:
        break;
      case 1002:
        break;
    }
  },
  onHide:function(){
    console.log('界面被隐藏是执行：onHide')
  },
  onError:function(msg){
    console.log('小程序中发生错误时会执行')
  },
  // onLaunch() {
    
  //   // 展示本地存储能力
  //   const logs = wx.getStorageSync('logs') || []
  //   logs.unshift(Date.now())
  //   wx.setStorageSync('logs', logs)

  //   // 登录
  //   wx.login({
  //     success: res => {
  //       // 发送 res.code 到后台换取 openId, sessionKey, unionId
  //     }
  //   })
  // },
  //全局均可用
  //具体用法 详见home.js
  globalData: {
    name:'小名',
    age:18
    
  }
})
