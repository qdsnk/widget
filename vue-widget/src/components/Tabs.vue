<template>
  <div id="tab" class="tab" style="display: block">
    <TabItem
        v-for="todo of todos"
        v-bind:todo="todo"
        :key="todo.id"
        v-on:remove-tab="removeTab"
        v-on:show-result="showResult"
    />
<!--    <ResultTab-->
<!--        v-for="result of results"-->
<!--        v-bind:result="result"-->
<!--        :key="result.id"-->
<!--        v-on:show-result="showResult"-->
<!--    />-->
<!--    <div id="tab-result" class="tab">-->
<!--      <p>Спасибо, Ваша обратная связь очень важна для нас!</p>-->
<!--      <div class="like"></div>-->
<!--    </div>-->
    <div id="tab-alt" class="tab">
      <TabAltItem
          v-for="alt of alts"
          v-bind:alt="alt"
          :key="alt.id"
      />
    </div>
  </div>
</template>

<script>
  import TabItem from "./TabItem";
  import TabAltItem from "./TabAltItem";
  // import ResultTab from "./ResultTab";
  export default {
    props: ['todos', 'alts'],
    components: {
      TabItem, TabAltItem
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
        this.todos = this.todos.filter(t => t.id !== id)
      },
      showResult() {
        this.display = !this.display;
      }
    },
  }
</script>