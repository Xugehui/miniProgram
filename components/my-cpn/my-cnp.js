// components/my-cpn/my-cnp.js
Component({
  options:{
    styleIsolation:"shared"  //表示页面wxss样式将影响到自定义组件，自义定组件wxss中指定的样式也会影响到页面和其他设置
    // “apply-shared ”表示页面wxss样式将影响到自定义组件，但自定义组件wxss中指定的样式不会影响页面
    // isolated：表示启用样式隔离，在自定义组件外，使用class指定的样式将不会相互影响（默认取值）

  },
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

  }
})
