<template>
  <div id="tab" class="tab" style="display: block">
    <div id="btn" class="btn" v-on:click="showRandomTab">kek</div>
    <TabItem
        v-on:show-random="showRandomTab"
        v-for="todo of todos"
        v-bind:todo="todo"
        :key="todo.id"
        v-on:show-result="showResult"
        v-on:remove-tab="removeTab"
    />
    <!--    <div id="tab-result" class="tab" v-if="data.display">-->
    <!--      <p>Спасибо, Ваша обратная связь очень важна для нас!</p>-->
    <!--      <div id="btn" class="btn" v-on:click="showResult">kek</div>-->
    <!--      <div class="like"></div>-->
    <!--    </div>-->
      <div id="tab-result" v-if="this.displayResult">
        <p>Спасибо, Ваша обратная связь очень важна для нас!</p>
        <div class="like"></div>
      </div>
    <TabAltItem
        v-for="alt of alts"
        v-bind:alt="alt"
        :key="alt.id"
        v-on:show-result="showResult"
    />
  </div>
</template>

<script>
  import TabItem from "./TabItem";
  import TabAltItem from "./TabAltItem";
  // import ResultTab from "./ResultTab";
  export default {
    data() {
      return {
        el: '#tab-result',
        data: {
          displayResult: false
        },
      }
    },
    props: ['todos', 'alts'],
    components: {
      TabItem, TabAltItem
    },
    methods: {
      removeTab(id) {
        this.todos = this.todos.filter(t => t.id !== id);
      },
      showResult() {
        this.displayResult = !this.displayResult;
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