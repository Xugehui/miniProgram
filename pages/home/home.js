// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0  ,
    count:0,
    first:'one',
    second:'two',
    age:18,
    nowtime: new Date().toLocaleString(),
    isActive:false,
    isShow:true,
    nums:[
      [1,2,3],
      [4,5,6],
      ['a','b','c']
    ]
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
   handleSwichcolor(){
    // console.log('-----')
    this.setData({
      isActive:!this.data.isActive
    })

   },
   handleSwichShow(){
     this.setData({
       isShow:!this.data.isShow
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
    
   },
   onLoad(){
     setInterval(() => {
       this.setData({
         nowtime:new Date().toLocaleString()
       })
     },1000
     )
   }

 
  
})