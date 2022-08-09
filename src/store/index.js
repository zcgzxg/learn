// 1.实现响应式
//      ref()、reactive() 定义响应式对象，对象中的属性本身是响应式的
import { reactive } from "vue";
const store = {
  // 通过一个大的对象来存储 reactive 对象创建的实例，以及相关的方法
  state: reactive({
    // 定义状态
    msg: "全局属性",
    BannerUrl: "",
  }),
  updateMsg: function () {
    this.state.msg = "改变全局属性";
  },
  updateBannerUrl: function (newUrl) {
    this.state.BannerUrl = newUrl; 
  },
  updateHotList:function(newData){
    this.state.hotList = newData
  }
};
// 2.在根组件中使用 provide 提供数据
export default store;
