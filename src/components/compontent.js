import { createApp } from "vue";
/**
 * 这是个简单组件的结构
 * js中利用vue的createApp属性创建一个实例如app
 * 实例的component属性接受两个参数（‘组件名’，{template：`模板html`}）
 * 实例的mount属性通过选择器给组件添加一个属性（一般多用ID）
 */
const app = createApp({
  data() {
    return {
      message: "是这个",
    };
  },
});
app.component("myComponent", {
  template: `<h1>{{message}}</h1>`,
});
app.mount("#myapp");
