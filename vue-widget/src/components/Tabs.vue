<template>
  <div id="tab" class="tab" style="display: block">
    <TabItem
        v-on:show-random="showRandomTab"
        v-for="todo of todos"
        v-bind:todo="todo"
        :key="todo.id"
        v-on:remove-tab="removeTab"
    />
    <!--    <div id="tab-result" class="tab" v-if="data.display">-->
    <!--      <p>Спасибо, Ваша обратная связь очень важна для нас!</p>-->
    <!--      <div id="btn" class="btn" v-on:click="showResult">kek</div>-->
    <!--      <div class="like"></div>-->
    <!--    </div>-->
    <ResultTab
        v-for="result of results"
        v-bind:result="result"
        :key="result.id"
        v-on:show-result="showResult"
    />
    <TabAltItem
        v-for="alt of alts"
        v-bind:alt="alt"
        :key="alt.id"
    />
  </div>
</template>

<script>
  import TabItem from "./TabItem";
  import TabAltItem from "./TabAltItem";
  import ResultTab from "./ResultTab";
  export default {
    // data() {
    //   return {
    //     el: '#tab',
    //     data :{
    //       display: false
    //     },
    //   }
    // },
    props: ['todos', 'alts', 'results'],
    components: {
      TabItem, TabAltItem, ResultTab
    },
    // methods: {
    //   showRandomTab: function () {
    //     var RandomTab = Math.floor(Math.random() * this.todos.length)
    //     this.$emit('give-advice', this.todos[RandomTab])
    //     console.log('kek');
    //   }
    // }
    methods: {
      removeTab(id) {
        this.todos = this.todos.filter(t => t.id !== id);
      },
      showResult() {
        this.display = !this.display;
        console.log('jmyak');
      },
      showRandomTab: function () {
        var getTab = '';
        var RandomTab = Math.floor(Math.random() * this.todos.length);
        getTab = this.todos[RandomTab];
        console.log(getTab.text);
        return getTab;
      }
    },
    // created() {
    //     var RandomTab = Math.floor(Math.random() * this.todos.length)
    //     this.getTab = this.todos[RandomTab]
    //     console.log('kek');
    // }
  }
</script>