// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0  ,
    count:0
  },
  handleInput(e){
    //console.log(e.detail.value)
    this.setData({
      num:e.detail.value
    })
  },
  handletap(e){
    //console.log(e)
    this.setData({
      num: this.data.num + 1
    })
    
   },
   handletap1(e){
    //console.log(e)
    this.setData({
      num: this.data.num - 1
    })
    
   },
   handletap2(){
    //console.log(e)
    this.setData({
      count: this.data.count + 1
    })
    
   },
   handletap3(){
    //console.log(e)
    this.setData({
      count: this.data.count - 1
    })
    
   }
 

 
  
})