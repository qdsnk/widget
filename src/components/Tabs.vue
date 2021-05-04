<template>
  <div id="tab" class="tab" style="display: block">
    <!--    <div id="btn" class="btn" v-on:click="showRandomTab">kek</div>-->
    <!--    <TabItem-->
    <!--        v-on:show-random="showRandomTab"-->
    <!--        v-on:show-result="showResult"-->
    <!--        v-on:remove-tab="removeTab">-->
    <!--    </TabItem>-->
    <!--    <TabAltItem-->
    <!--        v-for="alt of alts"-->
    <!--        v-bind:alt="alt"-->
    <!--        :key="alt.id"-->
    <!--        v-on:show-result="showResult"-->
    <!--    />-->
    <div id="tablet" v-if="display">
      <p>{{ showRandomTab() }}</p>
      <div class="btn-wrapper">
        <div id="yes" class="btn yes-btn"
             v-on:click="showResult(); reply_click" v-bind:class="{ disabled: notActive }">Да
        </div>
        <div id="no" class="btn no-btn" v-on:click="showATab(); reply_click"
             v-bind:class="{ disabled: notActive }">Нет
        </div>
      </div>
      <div v-if="displayAltTab">
        <p>{{ showAltTab() }}</p>
        <div class="btn-wrapper">
          <div class="input-answer">
            <form @submit="postData" method="post">
              <input type="text" name="answer2" placeholder="author" v-model="posts.answer2">
              <button id="confirm" class="btn" type="submit" v-on:click="showResult(); getInfo()">Ок</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div id="tab-result" v-if="this.displayResult">
      <p>Спасибо, Ваша обратная связь очень важна для нас!</p>
      <div class="like"></div>
    </div>
  </div>
</template>

<script>
// import TabItem from "./TabItem";
// import TabAltItem from "./TabAltItem";
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
export default {
  name: "Tabs",
  data() {
    return {
      displayResult: false,
      displayAltTab: false,
      display: true,
      notActive: false,
      getTab: [
        {id: '', text: '', text2: ''}
      ],
      posts: {
        question: null,
        answer: null,
        question2: null,
        answer2: null,
        timeAndDate: null,
        screen: null,
        userIP: null
      },
    }
  },
  props: ['todos', 'alts'],
  components: {
    // TabItem, TabAltItem
  },
  methods: {
    showRandomTab: function () {
      // if страница каталога get todos-catalog {...} if страница корзины get todos-cart {...} if страница товаров get {...
      var RandomTab = Math.floor(Math.random() * this.todos.length);
      this.getTab = this.todos[RandomTab];
      return this.getTab.text;
    },
    reply_click(id) {
      console.log(id);
    },
    showAltTab: function () {
      return this.getTab.text2;
    },
    // removeTab(id) {
    //   this.todos = this.todos.filter(t => t.id !== id);
    // },
    // removeTab() {
    //   this.display = !this.display;
    // },
    showResult() {
      this.displayResult = !this.displayResult;
      // this.notActive = !this.notActive;
      // this.display = !this.display;
      console.log('da');
    },
    showATab() {
      // this.notActive = !this.notActive;
      this.displayAltTab = !this.displayAltTab;
      console.log('net');
    },
    // showYourIP() {
    //   fetch('https://api.ipify.org?format=json')
    //       .then(x => x.json())
    //       .then(({ip}) => {
    //         this.posts.userIP = ip;
    //         console.log(this.posts.userIP);
    //       });
    // },
    getInfo: function () {
      this.posts.question = this.getTab.text;
      this.posts.question2 = this.getTab.text2;

      const today = new Date();
      const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + ' ' + time;
      this.posts.timeAndDate = dateTime;

      this.posts.screen = document.documentElement.clientWidth;

      fetch('https://api.ipify.org?format=json')
          .then(x => x.json())
          .then(({ip}) => {
            this.posts.userIP = ip;
            console.log(this.posts.userIP);
          });
    },
    // submitForm: (formElement) => {
    //   let form = document.getElementById(formElement);
    //   form.submit();
    //   // this.display = !this.display;
    // },
    postData(e) {
      // this.axios.post("")
      this.getInfo();
      this.axios.post("http://localhost:3000/posts/", this.posts)
          .then((result) => {
            console.warn(result)
          })
      e.preventDefault();
      this.display = !this.display;
    },
  },
}
</script>