<!--
 * @Author: your name
 * @Date: 2021-01-31 14:26:41
 * @LastEditTime: 2021-02-06 12:07:11
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \myvue1\src\components\singo.vue
-->
<template>
  <div>
    <!-- 组件插槽口 -->
    <slot name="sigon"></slot>
    <form action="" method="post">
      <div>
        <label for="name">用户名：</label>
        <input type="text" name="" id="name" />
      </div>
      <div>
        <label for="mima">密码：</label>
        <input type="password" name="" id="mima" />
      </div>
      <button type="submit">确定</button>
    </form>
    <button>{{ isshow }}切换</button>
  </div>
</template>

<script>
export default {
  name: "Sigon",
  props: {
    isshow: Boolean,
  },
};
</script>

<style scoped>
</style>