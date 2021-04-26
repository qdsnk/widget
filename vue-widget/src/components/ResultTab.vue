<template  v-if="this.display">
  <div id="tab-result">
    <div id="btn" class="btn" v-on:click="$emit('show-result')">kek</div>
      <p>{{ result.text }}</p>
      <div class="like"></div>
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
    result: {
      type: Object,
      required: true
    },
  },
  methods: {
    // showResult() {
    //   this.display = !this.display;
    //   console.log('jmyak');
    // },
  }
}
</script>