<template>
  <div>
    <form class="form" id="regForm">
      <!-- <div>
      <input type="text" name="author" v-model="post.author">
      <input type="text" name="title" v-model="post.title">
      <button type="submit">Post</button>
      </div> -->
      <div class="header_wrapper">
        <div class="close_btn"
             onclick="document.getElementById('regForm').classList.toggle('open')">
        </div>
        <h2>widget</h2>
      </div>
      <div class="wrapper">
        <Tabs
            v-bind:todos="todos"
            v-bind:alts="alts"
            v-bind:results="results"
        />
      </div>
    </form>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import Tabs from "./Tabs";
export default {
  data() {
    return {
      posts: {
        question: null,
        answer: null,
        question2: null,
        answer2: null
      },
      todos: [
        {id: 1, text: '1) Карточка товара показалась вам удобной?', text2: '1.2) Что именно помогло бы вам изменить свое мнение?'},
        {id: 2, text: '2) Вы нашли всю интересующую вас информацию по товару?', text2: '2.2) Что бы вы хотели еще узнать о товаре перед покупкой?'},
      ],
      alts: [
        {id: 1, text: 'Что именно помогло бы вам изменить свое мнение?'},
        {id: 2, text: 'Что бы вы хотели еще узнать о товаре перед покупкой'},
      ],
      // el: "#settings",
      // data :{
      //   display:false
      // },
      results: [
         {id: 1, text: 'Спасибо, Ваша обратная связь очень важна для нас!'}
      ]
    }
  },
  components: {
    Tabs
  },
  methods: {
    postData(e) {
      // this.axios.post("")
      this.axios.post("http://localhost:3000/posts/",this.posts)
          .then((result)=>{
            console.warn(result)
          })
      e.preventDefault();
    }
  },
  // methods: {
  //   removeTab(id) {
  //     this.todos = this.todos.filter(t => t.id !== id)
  //   }
  // },
}
</script>



<!--      <div class="wrapper">-->
<!--        <div id="tab-1" class="tab">-->
<!--          <p>Карточка товара показалась вам удобной?</p>-->
<!--          <div class="btn-wrapper">-->
<!--            <div id="yes-btn1" class="btn yes-btn" data-value='1'>Да</div>-->
<!--            <div id="no-btn1" class="btn no-btn" data-value='1'>Нет</div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div id="tab-1-1" class="tab">-->
<!--          <p>Что именно помогло бы Вам изменить своё мнение?</p>-->
<!--          <div class="btn-wrapper">-->
<!--            <div class="input-answer" data-value='1'>-->
<!--              <input id="input1-1"  type="text">-->
<!--            </div>-->
<!--            <div id="confirm1-1" class="btn" data-value='1'>Ок</div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div id="tab-2" class="tab">-->
<!--          <p>Вы нашли всю интересующую вас информацию по товару?</p>-->
<!--          <div class="btn-wrapper">-->
<!--            <div id="yes-btn2" class="btn yes-btn" data-value='1'>Да</div>-->
<!--            <div id="no-btn2" class="btn no-btn" data-value='1'>Нет</div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div id="tab-2-1" class="tab">-->
<!--          <p>Что бы Вы хотели ещё узнать о товаре перед покупкой?</p>-->
<!--          <div class="btn-wrapper">-->
<!--            <div class="input-answer" data-value='1'>-->
<!--              <input id="input2-1" type="text">-->
<!--            </div>-->
<!--            <div id="confirm2-1" class="btn" data-value='1'>Ок</div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div id="tab-result" class="tab">-->
<!--          <p>Спасибо, Ваша обратная связь очень важна для нас!</p>-->
<!--          <div class="like"></div>-->
<!--        </div>-->
<!--      </div>-->