<template>
  <div id="tablet">
    <p>{{ showRandomTab() }}</p>
    <div class="btn-wrapper">
      <div id="yes-btn" class="btn yes-btn"
           v-on:click="$emit('remove-tab', todo.id); $emit('show-result')">Да</div>
      <div id="no-btn" class="btn no-btn">Нет</div>
    </div>
<!--    <div id="btn" class="btn" v-on:click="showResult">keeek</div>-->
<!--    <div id="tab-result" class="tab" v-if="data.display">-->
<!--      <p>Спасибо, Ваша обратная связь очень важна для нас!</p>-->
<!--      <div class="like"></div>-->
<!--    </div>-->
  </div>
</template>

<script>

export default {
  data() {
    return {
      el: '#tablet',
      data :{
        displayResult: false,
        getTab: [
          {id: '', text: '', text2: ''}
        ],
      },
    }
  },
  props: {
    // todo: {
    //   type: Object,
    //   required: true
    // },
  },
  methods: {
    showRandomTab: function () {
      // var getTab = '';
      var RandomTab = Math.floor(Math.random() * this.todos.length);
      this.getTab = this.todos[RandomTab];
      console.log(this.getTab.text);
      return this.getTab.text;
    },
    showResult() {
      this.displayResult = !this.displayResult;
      console.log('jmyak');
    }
  },
}
</script>