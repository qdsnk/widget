<template>
  <div>
    <p>{{ todo.text }}</p>
    <div class="btn-wrapper">
      <div id="yes-btn" class="btn yes-btn"
           v-on:click="$emit('show-result'); $emit('remove-tab', todo.id)">Да</div>
      <div id="no-btn" class="btn no-btn">Нет</div>
    </div>
    <div id="tab-result" class="tab" v-if="display">
      <p>Спасибо, Ваша обратная связь очень важна для нас!</p>
      <div class="like"></div>
    </div>
  </div>
</template>

<script>

export default {
  // data() {
  //   return {
  //     el: '#app',
  //     data :{
  //       display:false
  //     },
  //   }
  // },
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    showResult() {
      this.display = !this.display;
    }
  }
}
</script>