<template>
  <div>
    <h1>{{ tt }}:{{ num }}</h1>
    <button @click="$emit('getClick', anys)">我是孩子按钮</button>
  </div>
</template>

<script>
export default {
  name: "Coma",
  props: {
    tt: String,
    num: Number,
  },
  data() {
    return {
      anys: "我是参数",
    };
  },
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>