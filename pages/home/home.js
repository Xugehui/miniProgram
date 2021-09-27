// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0  
  },
  handleInput(e){
    //console.log(e.detail.value)
    this.setData({
      num:e.detail.value
    })
  },
  handletap(e){
   console.log(e)
   
  }

  
})