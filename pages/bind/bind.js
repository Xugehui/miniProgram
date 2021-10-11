// pages/bind/bind.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:['衣服','鞋子','包包'],
    count:0

  },
  handleItemClick(event){
   // console.log(event)
   const dataset = event.currentTarget.dataset
   const title =dataset.item
   const index = dataset.index
   console.log(title)
   console.log(index)

  },
  handleCaptureView1(){
    console.log('handleCaptureView1')
  },
  handleBindView1(){
    console.log('handleBindView1')
  },
  handleCaptureView2(){
    console.log('handleCaptureView2')
  },
  handleBindView2(){
    console.log('handleBindView2')
  },
  handleCaptureView3(){
    console.log('handleCaptureView3')
  },
  handleBindView3(){
    console.log('handleBindView3')
  },
  handeleIn(){
    this.setData({
      count:this.data.count+1
    })
  }
 
})