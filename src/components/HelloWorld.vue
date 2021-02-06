<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ my }}</h2>

    <h2>v-model+修饰符.number/.trim/.lazy</h2>
    <div class="medol">
      <label for="v1">vue</label>
      <input v-model="message" type="checkbox" name="" id="v1" value="vue" />
      <label for="v2">react</label>
      <input v-model="message" type="checkbox" name="" id="v2" value="react" />
      <label for="v3">reactNative</label>
      <input
        v-model="message"
        type="checkbox"
        name=""
        id="v3"
        value="reactNative"
      />
      <label for="v4">expo</label>
      <input v-model="message" type="checkbox" name="" id="v4" value="expo" />
    </div>
    <p>选中了{{ message }}</p>
    <div class="xiushi">
      <input v-model="mss" type="text" name="" id="" />
      <p>最普通的数据绑定{{ mss }}</p>
      <input v-model.number="num" type="number" />
      <p>.number出来的是数字类型{{ num }}默认为字符串</p>
      <input v-model.trim="tt" type="text" />
      <p>.trim出来的是会自动修剪空格{{ tt }}</p>
      <input v-model.lazy="cha" type="text" />
      <p>.lazy出来的是根据change更新的{{ cha }}</p>
    </div>

    <h2>v-for+v-medol</h2>
    <div class="checkboxModel">
      <span v-for="option in options" :key="option">
        <input
          type="checkbox"
          name=""
          :id="option.value"
          v-model="messages"
          :value="option.value"
        />
        <label :for="option.value">{{ option.value }}</label>
      </span>
      <div>checkbox:{{ messages }}</div>
    </div>

    <h2>v-if/v-show</h2>
    <div class="if">
      <label for="textif">输入后看dom：</label>
      <input v-model="vif" type="text" name="" id="textif" />
      <button v-if="vif">我是因为if出来的</button>
      <label for="textshow">输入后看dom：</label>
      <input v-model="vshow" type="text" name="" id="textshow" />
      <button v-show="vshow">我是因为show出来的</button>
    </div>

    <h2>v-if+v-else-if</h2>
    <div class="if-else">
      <p>请选择</p>

      <input type="radio" v-model="show" value="yes" name="ifelse" id="if" />
      <label for="if">yes</label>
      <input type="radio" v-model="show" value="no" name="ifelse" id="else" />
      <label for="else">no</label>
      <p v-if="show === 'yes'">很棒你选择了yes</p>
      <p v-else-if="show === 'no'">不好意思你选择了no-请重新选择</p>
    </div>

    <h2>v-bind/:+v-on/@</h2>
    <div
      class="bindcss"
      :style="{ perspectiveOrigin: `${x}% ${y}%` }"
      @mousemove="anim"
    >
      <div class="side front">1</div>
      <div class="side back">6</div>
      <div class="side right">4</div>
      <div class="side left">3</div>
      <div class="side top">5</div>
      <div class="side bottom">2</div>
    </div>
    <div class="counter">
      <button @click="counte > 0 ? (counte -= 1) : 0">-</button>
      <span>counter:{{ counte }}</span>
      <button @click="counte += 1">+</button>
    </div>
    <h2>v-for-->object</h2>
    <div class="forObject">
      <ul>
        <li v-for="(value, key, index) in obj" :key="value">
          {{ index }}、{{ key }}——{{ value }}
        </li>
      </ul>
    </div>

    <h2 v-pre>v-once/v-pre/pre+{{ $data }}</h2>
    <div class="oncepre">
      <input type="text" v-model="tacos" name="" id="" />
      <p v-once>这是个不更新的v语法{{ tacos }}</p>
      <p v-pre>v-pre是不绑定数据的{{ tacos }}</p>
      <pre>{{ $data.movie }}</pre>
    </div>

    <h2>v-html/v-text</h2>
    <p v-html="a"></p>
    <p v-html="b"></p>
    <p v-text="a"></p>

    <h2>methods</h2>
    <div
      @mousemove="xcolor"
      class="area"
      :style="{ backgroundColor: `hsl(${colorX},80%,50%)` }"
    >
      <p>PageX:{{ colorX }}</p>
    </div>

    <div class="formarea">
      <p>请评论一下上面的彩色盒子好玩吗？</p>
      <ul>
        <li v-for="(item, index) in items" :key="item">
          {{ index + 1 }}、{{ item }}
        </li>
      </ul>
      <input
        placeholder="请添加一条评论"
        @keyup.enter="addItems"
        type="text"
        v-model="newitem"
        name=""
        id=""
      />
    </div>

    <form class="form" @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label><br />
        <input type="text" id="name" v-model="name" required />
      </div>
      <div>
        <label for="email">Email:</label><br />
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="textarea">备注：</label><br />
        <textarea
          name=""
          id="textarea"
          cols="20"
          rows="5"
          v-model="textarea"
        ></textarea>
      </div>
      <button :class="[name ? activeClass : '']" type="submit">Submit</button>
    </form>
    <h3>服务器端：</h3>
    <pre>{{ server }}</pre>

    <h2>v-for 数据更新 表格排序 计算属性</h2>
    <div class="movie">
      <h3>搜索：<input type="text" v-model="moviedata" /></h3>
      <h3>
        排序方式：<button @click="abcSmaill">最低评分</button>
        <button @click="abcBag">最高收视率</button>
      </h3>
      <table>
        <thead>
          <tr>
            <th v-for="key in col" :key="key">{{ key }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in getmovie" :key="item">
            <td v-for="key in col" :key="item[key]">{{ item[key] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h2>watch——监听属性</h2>
    <input type="number" v-model.number="count" name="" id="" />
    <div class="beerArea">
      <ul>
        <li v-for="item in beers" :key="item">
          <div class="imgarea">
            <img :src="item.img" alt="" />
          </div>
          <div class="beerInfo">
            <h3>{{ item.name }}</h3>
            <h4>{{ item.tagline }}</h4>
            <p><span>description: </span> {{ item.desc }}</p>
            <p><span>tips: </span> {{ item.tips }}</p>
            <h4>Food Pairings</h4>
            <ul>
              <li v-for="foods in item.food" :key="foods">{{ foods }}</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>

    <div class="tudata">
      <select v-model="selected" name="" id="">
        <option
          v-for="option in optionsData"
          :key="option"
          :value="option.value"
        >
          {{ option.text }}
        </option>
      </select>

      <svg viewBox="0 0 400 400" width="400px">
        <g targetVal="targetVal" class="xaxis">
          <line x1="0" y1="1" x2="360" y2="1" />
          <g v-for="(select, index) in targetVal" :key="select">
            <line
              :x1="index * 10"
              y1="0"
              :x2="index * 10"
              :y2="index % 5 === 0 ? '12' : '7'"
            />
            <text v-if="index % 5 === 0" :x="index * 10" y="25">
              {{ index }}
            </text>
          </g>
        </g>
        <g class="yaxis">
          <line x1="0" y1="1" :x2="getMax" y2="1" />
          <g v-for="i in getMaxRange" :key="i">
            <line
              :x1="i * 10"
              y1="0"
              :x2="i * 10"
              :y2="(getMax / 10 - i) % 5 === 0 ? 12 : 7"
            />
            <text v-if="i % 5 === 0" :x="getMax - i * 10 - 5" y="25">
              {{ i }}
            </text>
          </g>
        </g>
        <g class="rect" v-for="(select, index) in targetVal" :key="select">
          <rect
            :x="index * 10"
            :y="getMax - select * 10"
            width="10"
            :height="select * 10"
          />
        </g>
      </svg>
    </div>

    <h2>组件</h2>
    <div class="components">
      <h3>{{ coma }}</h3>
      <!-- 这个是父组件通过属性传递到子组建中；@后跟的是子组建中的事件执行函数名=后跟的是真正的事件执行向项 -->
      <Coma tt="我是一个属性" :num="num" @getClick="ComaMyClick"></Coma>
      <h2>模态框——插槽</h2>

      <button v-if="isshow" @click="isshow = !isshow">请先登陆</button>
      <Singo v-else :isshow="isshow">
        <!-- 组件传递整个模板到组建内部留好的插槽口 -->
        <template v-slot:sigon>
          <p>登陆模态框</p>
        </template>
      </Singo>
    </div>
  </div>
</template>

<script>
import beerDatas from "../data/beerData.json";
import Coma from "./Com";
import Singo from "./singo.vue";

export default {
  // 组件自己，包含组件名和属性传递的参数
  name: "HelloWorld",
  props: {
    msg: String,
  },

  // 引入的子组件
  components: {
    Coma,
    Singo,
  },

  data() {
    return {
      my: "第一课熟悉v指令",
      message: [],
      messages: [],
      options: [
        { value: "第一" },
        { value: "第二" },
        { value: "第三" },
        { value: "第四" },
        { value: "第五" },
      ],
      vif: "",
      vshow: "",
      show: "",
      x: "",
      y: "",
      obj: {
        vue: "容易上手的",
        react: "丰富有趣的",
        reactNative: "好的趋势",
      },
      tacos: "我就是v-once",
      counte: 0,
      a: `我要学习<a href="https://v3.vuejs.org/">vue</a>`,
      b: `如果不确定输出是什么就尽量不要用v-html<a href='#' onclick="alert('安装一下哦！额额额')">html</a>`,
      num: 0,
      tt: "",
      cha: "",
      mss: "",
      colorX: "",
      items: ["不好玩", "我觉得还好呀", "好个屁", "你觉得呢？"],
      newitem: "",
      name: "",
      email: "",
      textarea: "",
      server: "",
      activeClass: "active",
      col: ["title", "rating"],
      movie: [
        { title: `White Chicks`, rating: 82 },
        { title: `Grey's Anatomy`, rating: 98 },
        { title: `Prison Break`, rating: 98 },
        { title: `How I Met Your Mother`, rating: 94 },
        { title: `Supernatural`, rating: 95 },
        { title: `Breaking Bad`, rating: 97 },
        { title: `The Vampire Diaries`, rating: 91 },
        { title: `The Walking Dead`, rating: 98 },
        { title: `Pretty Little Liars`, rating: 96 },
        { title: `Once Upon a Time`, rating: 98 },
        { title: `Sherlock`, rating: 95 },
        { title: `Death Note`, rating: 77 },
        { title: `Naruto`, rating: 88 },
        { title: `Arrow`, rating: 96 },
        { title: `Black Mirror`, rating: 80 },
        { title: `The Originals`, rating: 74 },
        { title: `The 100`, rating: 97 },
        { title: `Masha and the Bear`, rating: 81 },
        { title: `Hunter X Hunter`, rating: 57 },
        { title: `Marvel's Luke Cage`, rating: 95 },
        { title: `Marvel's Iron Fist`, rating: 98 },
      ],
      moviedata: "",
      count: 0,
      beers: "",
      bottom: false,
      optionsData: [
        {
          value: [
            25,
            37,
            15,
            13,
            25,
            30,
            11,
            17,
            35,
            10,
            25,
            15,
            5,
            27,
            15,
            13,
            25,
            36,
            15,
            14,
            35,
            10,
            14,
            15,
            35,
            17,
            12,
            13,
            25,
            30,
            14,
            17,
            35,
            10,
            25,
            15,
          ],
          text: "第一组数据",
        },
        {
          value: [
            13,
            25,
            30,
            11,
            17,
            35,
            10,
            25,
            15,
            5,
            27,
            15,
            13,
            25,
            36,
            15,
            14,
            35,
            10,
            14,
            15,
            35,
            17,
            12,
            13,
            25,
            30,
            14,
            17,
            35,
            10,
            25,
            15,
            25,
            37,
            15,
          ],
          text: "第二组数据",
        },
        {
          value: [
            35,
            10,
            25,
            15,
            5,
            27,
            15,
            13,
            25,
            36,
            15,
            14,
            35,
            10,
            14,
            15,
            35,
            17,
            12,
            13,
            25,
            30,
            14,
            17,
            35,
            10,
            25,
            15,
            25,
            37,
            15,
            13,
            25,
            30,
            11,
            17,
          ],
          text: "第三组数据",
        },
      ],
      selected: [
        25,
        37,
        15,
        13,
        25,
        30,
        11,
        17,
        35,
        10,
        25,
        15,
        5,
        27,
        15,
        13,
        25,
        36,
        15,
        14,
        35,
        10,
        14,
        15,
        35,
        17,
        12,
        13,
        25,
        30,
        14,
        17,
        35,
        10,
        25,
        15,
      ],
      targetVal: [
        25,
        37,
        15,
        13,
        25,
        30,
        11,
        17,
        35,
        10,
        25,
        15,
        5,
        27,
        15,
        13,
        25,
        36,
        15,
        14,
        35,
        10,
        14,
        15,
        35,
        17,
        12,
        13,
        25,
        30,
        14,
        17,
        35,
        10,
        25,
        15,
      ],
      coma: 100,
      isshow: true,
    };
  },
  mounted() {
    this.beers = beerDatas.beer.slice(0, 4);
    // console.log(beerDatas);
    this.SVGcolor();
    // console.log(app);
  },
  created() {
    window.addEventListener("scroll", () => {
      this.bottom = this.bottomScreen();
    });
  },
  methods: {
    /**
     * 这个函数是鼠标移动事件mousemove
     * 它做了一个样式的动态绑定
     * @param {Object} event 鼠标移动
     *
     */
    anim(event) {
      const windowX = window.innerWidth;
      const windowY = window.innerHeight;
      if (windowX / 2 < event.screenX) {
        this.x = "0";
      } else {
        this.x = "100";
      }
      if (event.screenY < 500) {
        this.y = "100";
      } else {
        this.y = "0";
      }

      console.log(event.screenX, event.screenY, windowX, windowY);
    },
    xcolor(event) {
      this.colorX = event.clientX;
    },
    addItems() {
      this.items.push(this.newitem);
      this.newitem = "";
    },

    /**
     * 这个函数是从小到大排序
     * Vue封装了观察到的数组的变异方法，因此它们也将触发视图更新。
     * 包装的方法是：
     * push()--pop()--shift()--unshift()--splice()--sort()--reverse()
     */
    abcSmaill() {
      this.movie.sort((a, b) => {
        return a.rating > b.rating ? 1 : -1;
      });
    },
    abcBag() {
      this.movie.sort((a, b) => {
        return a.rating < b.rating ? 1 : -1;
      });
    },
    /**
     * 滚动条触底
     * @constant scrolly 这个是滚动条位置
     * @constant clienth 这个是元素内部的高度(单位像素)，包含内边距，但不包括水平滚动条、边框和外边距
     * @constant scrollh 这个是一个元素内容高度的度量，包括由于溢出导致的视图中不可见内容。
     */
    bottomScreen() {
      const scrolly = window.scrollY;
      const clienth = document.documentElement.clientHeight;
      const scrollh = document.documentElement.scrollHeight;
      // const bottomPage = clienth + Math.ceil(scrolly) >= scrollh;
      const bottomPage = clienth + scrolly >= scrollh;
      // console.log(scrolly, scrollh, clienth, bottomPage);
      return bottomPage || scrollh < clienth;
    },
    SVGcolor() {
      const g = document.querySelectorAll(".rect");
      // console.log(g);
      for (let i = 0; i < g.length; i++) {
        const a = (i - 10) * ((300 / 40) * 1.25);
        const b = (i - 1) * (300 / 40);
        g[i].style.fill = `hsl(${a},${b}%,40%)`;
      }
    },
    /**
     * 这个函数是子组件通过事件来改变父组件中的状态
     */
    ComaMyClick(anys) {
      this.coma = 10 + anys;
    },
  },
  computed: {
    /**
     * 这是计算属性当movie发生变化了
     * 就会执行并返回响应的值
     * match匹配一个正则表达式
     */
    getmovie() {
      let texts = new RegExp(this.moviedata, "i");

      return this.movie.filter((a) => a.title.match(texts));
    },
    /**
     *@augments array .apply(Math,list)是将数组的每个值作为参数传递给函数
     *与ES6中结构后传参等效
     */
    getMax() {
      return Math.max.apply(Math, this.selected) * 10;
      // return Math.max(...this.selected) * 10;
    },
    getMaxRange() {
      let max = Math.max(...this.selected);
      let arrays = new Array(max);
      for (let i = 0; i < arrays.length; i++) {
        arrays[i] = i + 1;
      }
      return arrays;
    },
  },
  watch: {
    beers() {
      // console.log(this.beers);
    },
    count(newvalue, oldvalue) {
      console.log(
        `我一直在监视它，第${this.num++}次-新值：${newvalue}和旧值：${oldvalue}`
      );
    },
    bottom(newvalue) {
      if (newvalue) {
        if (this.bottomScreen()) {
          this.beers.push(...beerDatas.beer.splice(0, 4));
        }
      }
    },
    selected(newvalue, oldvalue) {
      this.targetVal = newvalue;
      this.SVGcolor();
      console.log(newvalue, oldvalue);
    },
    // selected(newValue, oldValue) {
    //   // Create a dummy object that will get updated by GSAP
    //   var tweenedData = {}

    //   // Update function that is invoked on each tween step
    //   // we use this to push the data
    //   var update = function() {
    //     let obj = Object.values(tweenedData);
    //     obj.pop();
    //     this.targetVal = obj;
    //   }

    //   // Create an object to hold the source data to be tweened and the
    //   // function pointer for update events
    //   var tweenSourceData = { onUpdate: update, onUpdateScope: this}

    //   for (let i = 0; i < oldValue.length; i++) {
    //     // Turn the current index into a string
    //     let key = i.toString()
    //     tweenedData[key] = oldValue[i]
    //     tweenSourceData[key] = newValue[i]
    //   }

    //   // Tween over the our target dummy object, but only for the specific key
    //   TweenMax.to(tweenedData, 1, tweenSourceData)
    // }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
h3 {
  margin: 40px 0 0;
}
h2 {
  color: #41b883;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
  /* background: hsl(hue, saturation, lightness); */
}
a {
  color: #42b983;
}
.bindcss {
  margin: 1em auto;
  font-size: 5em;
  width: 2em; /**父元素与子元素面宽高要一一对应 */
  height: 2em;
  transform-style: preserve-3d; /**3d效果 */
  perspective: 400px; /**这个是透视景深的拉伸 */
}
.side {
  position: absolute;
  width: 2em;
  height: 2em;
  background: rgba(126, 216, 85, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: aliceblue;
  text-align: center;
  line-height: 2em;
}
.front {
  transform: translateZ(1em);
}
.top {
  transform: rotateX(90deg) translateZ(1em);
}
.right {
  transform: rotateY(90deg) translateZ(1em);
}
.left {
  transform: rotateY(-90deg) translateZ(1em);
}
.bottom {
  transform: rotateX(-90deg) translateZ(1em);
}
.back {
  transform: rotateY(180deg) translateZ(1em);
}
.area {
  width: 40%;
  height: 300px;
  margin: 20px auto;
  background-color: antiquewhite;
}
.formarea ul {
  width: 200px;
  margin: auto;
  text-align: left;
}
.form {
  width: 200px;
  background-color: #41b883;
  margin: 30px auto;
  padding: 5px;
}
.form div {
  margin: 10px auto;
  width: 165px;
  text-align: left;
}
.active {
  background: orangered;
}
.movie {
  width: 300px;
  padding: 3px 20px;
  margin: 10px auto;
  background-color: #41b883;
}
table {
  border-collapse: collapse;
}
.movie h3 {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.movie button {
  width: 85px;
  height: 40px;
  background: orangered;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-left: 5px;
}

th {
  width: 100%;
  text-transform: capitalize;
}
td {
  padding: 10px;
  border: 1px solid white;
}
.beerArea {
  width: 60%;
  margin: 20px auto;
}
.beerArea h3 {
  margin: 10px 0;
}
.beerArea li {
  display: flex;
  margin: 20px 0;
}
.beerInfo {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.beerArea img {
  height: 350px;
  /* width: 160px; */
}
.beerArea .imgarea {
  padding: 30px;
  background: #ff6542;
  border: 1px solid #88498f;
  border-right: 1px solid #f44822;
}
.beerArea p {
  text-align: left;
  margin: 5px 0;
}
.beerInfo li {
  list-style-type: decimal;
}
.tudata {
  display: flex;
  flex-direction: column;
  align-items: center;
}
line {
  stroke: #555;
  stroke-width: 2px;
}
svg text {
  fill: grey;
  font-family: "Mada", sans-serif;
}
.xaxis {
  transform: translate(30px, 370px);
}
.yaxis {
  transform: translate(30px, 0) rotate(90deg);
}
.rect {
  transform: translateX(30px);
}
</style>
