<template>
  <div id="tablet">
    <p>{{ todo.text }}</p>
    <div class="btn-wrapper">
      <div id="yes-btn" class="btn yes-btn"
           v-on:click="$emit('show-result'); $emit('remove-tab', todo.id)">Да</div>
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
      el: '#tab-result',
      data :{
        display: false
      },
    }
  },
  props: {
    todo: {
      type: Object,
      required: true
    },
  },
  methods: {
    showResult() {
      this.display = !this.display;
      console.log('jmyak');
    },
  //   showRandomTab: function () {
  //     var getTab = '';
  //     var RandomTab = Math.floor(Math.random() * this.todos.length);
  //     getTab = this.todos[RandomTab];
  //     return getTab;
  //   }
  },
  // created() {
  //   const RandomTab = Math.floor(Math.random() * this.todos.length);
  //   this.getTab = this.todos[RandomTab];
  //   console.log(this.todos[RandomTab]);
  // }
}
</script>