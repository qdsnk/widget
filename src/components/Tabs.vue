<template>
  <div id="tab" class="tab" style="display: block">
<!--    <div id="btn" class="btn" v-on:click="showRandomTab">kek</div>-->
<!--    <TabItem-->
<!--        v-on:show-random="showRandomTab"-->
<!--        v-on:show-result="showResult"-->
<!--        v-on:remove-tab="removeTab">-->
<!--    </TabItem>-->
    <div id="tablet" v-if="display">
      <p>{{ showRandomTab() }}</p>
      <div class="btn-wrapper">
        <div id="yes-btn" class="btn yes-btn"
             v-on:click="removeTab(); showResult()" v-bind:class="{ disabled: notActive }">Да</div>
        <div id="no-btn" class="btn no-btn" v-on:click="showATab()" v-bind:class="{ disabled: notActive }">Нет</div>
      </div>
      <div v-if="displayAltTab">
        <p>{{ showAltTab() }}</p>
        <div class="btn-wrapper">
          <div class="input-answer">
            <input id="input" type="text">
          </div>
          <div id="confirm" class="btn" v-on:click="removeTab(); showResult()">Ок</div>
        </div>
      </div>
    </div>
    <!--    <div id="tab-result" class="tab" v-if="data.display">-->
    <!--      <p>Спасибо, Ваша обратная связь очень важна для нас!</p>-->
    <!--      <div id="btn" class="btn" v-on:click="showResult">kek</div>-->
    <!--      <div class="like"></div>-->
    <!--    </div>-->
      <div id="tab-result" v-if="this.displayResult">
        <p>Спасибо, Ваша обратная связь очень важна для нас!</p>
        <div class="like"></div>
      </div>
<!--    <TabAltItem-->
<!--        v-for="alt of alts"-->
<!--        v-bind:alt="alt"-->
<!--        :key="alt.id"-->
<!--        v-on:show-result="showResult"-->
<!--    />-->
  </div>
</template>

<script>
  // import TabItem from "./TabItem";
  // import TabAltItem from "./TabAltItem";
  // import ResultTab from "./ResultTab";
  export default {
    data() {
      return {
        // el: '#tab',
        // data: {
          displayResult: false,
          displayAltTab: false,
          display: true,
          notActive: false,
          getTab: [
            {id: '', text: '', text2: ''}
          ],
        // },
      }
    },
    props: ['todos', 'alts'],
    components: {
      // TabItem, TabAltItem
    },
    methods: {
      showRandomTab: function () {
        var RandomTab = Math.floor(Math.random() * this.todos.length);
        this.getTab = this.todos[RandomTab];
        return this.getTab.text;
      },
      showAltTab: function () {
        return this.getTab.text2;
      },
      // removeTab(id) {
      //   this.todos = this.todos.filter(t => t.id !== id);
      // },
      removeTab() {
        this.display = !this.display;
      },
      showResult() {
        this.displayResult = !this.displayResult;
        this.notActive = !this.notActive;
        console.log('da');
      },
      showATab() {
        this.displayAltTab = !this.displayAltTab;
        console.log('net');
      }
    },
  }
</script>