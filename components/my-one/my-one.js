// components/my-one/my-one.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // title:String
    title:{
      type:String,
      value:'我是默认的值',
      observer:function(newVal,odeVal1){
        console.log(newVal,odeVal1)
      }
    }

  },
  externalClasses:['titleclass'],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
