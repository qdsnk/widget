<template>
    <form class="form" id="regForm" action="">
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
</template>
<script>
import Tabs from "./Tabs";
export default {
  data() {
    return {
      todos: [
        {id: 1, text: '1Карточка товара показалась вам удобной?', text2: 'дополнительный вопрос 1'},
        {id: 2, text: '2Вы нашли всю интересующую вас информацию по товару?', text2: 'дополнительный вопрос 2'},
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