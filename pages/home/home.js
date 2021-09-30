// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0 ,
    list:[]
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
  //-------------------------------1\监听页面的生命周期函数---------------
  onLoad(){
    //方法2：需添加的
    const _this = this
    console.log('onload:生命周期回调—监听页面加载')
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      //方法一
      // success:(res)=>{
      //   console.log(res)
      //   const data = res.data
      //   console.log(data)
      //   this.setData({
      //     list: data
      //   }) 

      // }
       //方法2：
      success: function(res) {
        console.log(res)
        const data = res.data
        console.log(data)
        _this.setData({
          list: data
        }) 
  
    },
    })
   
  },
  //页面初次渲染完成时会回调
  onReady(){
    console.log('onready:生命周期回调—监听页面初次渲染完成')
  },
  onHide(){
    console.log('onhide:生命周期回调—监听页面隐藏')
  },
  //页面显示出来时
  onShow(){
    console.log('onshow:生命周期回调—监听页面显示')
  },
  onUnload(){
    console.log('onUnLoad:生命周期回调—监听页面卸载')
  }
  
})