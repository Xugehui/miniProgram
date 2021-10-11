// components/my-event/my-event.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handeleIn(){
      // console.log('--------')
      //将事件发射出去
      this.triggerEvent('increment',{},{})
    }

  }
})
