/* eslint-disable no-unused-vars */ //这是对整个文件禁用了eslint中对没有利用的变量提醒格式

/**
 * 用来进行列表渲染的数据
 */
const items = [
  "v-if",
  "v-on",
  "v-else",
  "v-else-if",
  "v-show",
  "v-for",
  "v-text",
  "v-html",
  "v-slot",
  "v-bind",
  "v-model",
  "v-pre",
  "v-cloak",
  "v-once",
  "v-is",
];

/**
 * 这是实际处理列表渲染的函数v-for
 * @constant full_li 是把每个数据写做li里面并把其拼接成字符串
 * @constant contain 是锁定一个dom
 * 最后在该dom中把所有字符串解析为html
 */

function listOfStuff() {
  const full_li = items.map((el) => `<li>${el}</li>`).join(" ");
  const contain = document.querySelector("#container");
  contain.innerHTML = `<ul>${full_li}</ul>`;
}

/**
 * v-model双向绑定语法糖
 */

function model() {
  let text = document.querySelector(".div");
  document.querySelector("input").addEventListener("change", (event) => {
    text.innerText = event.target.value;
  });
}
