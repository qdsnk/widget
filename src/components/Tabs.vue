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
             v-on:click="showResult(); btnYesClicked(); postData()" v-bind:class="{ disabled: notActive }">Да
        </div>
        <div id="no" class="btn no-btn" v-on:click="showATab();"
             v-bind:class="{ disabled: notActive }">Нет
        </div>
      </div>
      <div v-if="displayAltTab">
        <p>{{ showAltTab() }}</p>
            <form @submit="postData" method="post" class="form-input">
              <input type="text" name="answer2" placeholder="Введите ответ" v-model="posts.answer2">
              <div class="btn-wrapper">
                <button id="confirm" class="btn" type="submit" v-on:click="showResult(); getInfo()">Ок</button>
              </div>
            </form>
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
// import './assets/js/detect.min.js';

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
      // getTab: [
      //   {id: '', text: '', text2: ''}
      // ],
      getTab: null,
      posts: {
        question: null,
        answer: null,
        question2: null,
        answer2: null,
        timeAndDate: null,
        screen: null,
        userIP: null,
        browser: null,
        device: null,
        fromPage: null
      },
    }
  },
  props: ['todos', 'alts', 'todosCatalog', 'todosCart'],
  components: {
    // TabItem, TabAltItem
  },
  methods: {
    showRandomTab: function () {
      if (this.getTab === null){
        if (window.location.href == 'http://localhost:8080/') {
          var RandomTab = Math.floor(Math.random() * this.todos.length);
          this.getTab = this.todos[RandomTab];
        }
        if (window.location.href == 'http://localhost:8080/?') {
          var RandomTabCatalog = Math.floor(Math.random() * this.todosCatalog.length);
          this.getTab = this.todosCatalog[RandomTabCatalog];
        }
        if (window.location.pathname == '/cart') {
          var RandomTabCart = Math.floor(Math.random() * this.todosCart.length);
          this.getTab = this.todosCart[RandomTabCart];
        }
      }
      return this.getTab.text;
    },
    btnYesClicked() {
      this.posts.answer = 'da';
    },
    showAltTab: function () {
      this.posts.answer = 'net';
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
    getInfo: function () {
      this.posts.question = this.getTab.text;
      this.posts.question2 = this.getTab.text2;

      const today = new Date();
      const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + ' ' + time;
      this.posts.timeAndDate = dateTime;

      this.posts.screen = document.documentElement.clientWidth;

      let a = '';
      if (navigator.userAgent.search(/Safari/) > 0) {a = 'Safari'}
      if (navigator.userAgent.search(/Firefox/) > 0) {a = 'MozillaFirefox'}
      if (navigator.userAgent.search(/MSIE/) > 0 || navigator.userAgent.search(/NET CLR /) > 0) {a = 'Internet Explorer'}
      if (navigator.userAgent.search(/Chrome/) > 0) {a = 'Google Chrome'}
      if (navigator.userAgent.search(/YaBrowser/) > 0) {a = 'Яндекс браузер'}
      if (navigator.userAgent.search(/OPR/) > 0) {a = 'Opera'}
      if (navigator.userAgent.search(/Konqueror/) > 0) {a = 'Konqueror'}
      if (navigator.userAgent.search(/Iceweasel/) > 0) {a = 'Debian Iceweasel'}
      if (navigator.userAgent.search(/SeaMonkey/) > 0) {a = 'SeaMonkey'}
      if (navigator.userAgent.search(/Edge/) > 0) {a = 'Microsoft Edge'}
      this.posts.browser = a;

      var userDeviceArray = [
      {device: 'Android', platform: /Android/},
      {device: 'iPhone', platform: /iPhone/},
      {device: 'iPad', platform: /iPad/},
      {device: 'Symbian', platform: /Symbian/},
      {device: 'Windows Phone', platform: /Windows Phone/},
      {device: 'Tablet OS', platform: /Tablet OS/},
      {device: 'Linux', platform: /Linux/},
      {device: 'Windows', platform: /Windows NT/},
      {device: 'Macintosh', platform: /Macintosh/}
      ];
      var platform = navigator.userAgent;
      function getPlatform() {
          for (var i in userDeviceArray) {
              if (userDeviceArray[i].platform.test(platform)) {
                  return userDeviceArray[i].device;
              }
          }
          return 'Неизвестная платформа!' + platform;
      }
      this.posts.device = getPlatform();

      fetch('https://api.ipify.org?format=json')
          .then(x => x.json())
          .then(({ip}) => {
            this.posts.userIP = ip;
          });
      this.posts.fromPage = window.location.href;
    },

    // submitForm: (formElement) => {
    //   let form = document.getElementById(formElement);
    //   form.submit();
    //   // this.display = !this.display;
    // },
    postData(e) {
      // this.axios.post("")
      this.getInfo();
      setTimeout(() => this.axios.post("http://localhost:3000/posts/", this.posts)
          .then((result) => {
            console.warn(result)
          }), 5000)
      e.preventDefault();
      this.display = !this.display;
    },
  },
}
</script>