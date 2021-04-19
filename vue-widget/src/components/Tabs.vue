<template>
  <div id="tab" class="tab" style="display: block">
    <TabItem
        v-for="todo of todos"
        v-bind:todo="todo"
        :key="todo.id"
    />
    <div class="btn-wrapper">
      <div id="yes-btn" class="btn yes-btn">Да</div>
      <div id="no-btn" class="btn no-btn">Нет</div>
    </div>
    <div id="tab-alt" class="tab" style="display: block">
      <TabAltItem
          v-for="alt of alts"
          v-bind:alt="alt"
          :key="alt.id"
      />
      <div class="btn-wrapper">
        <div class="input-answer" data-value='1'>
          <input id="input" type="text">
        </div>
        <div id="confirm" class="btn" data-value='1'>Ок</div>
      </div>
    </div>
  </div>
</template>

<script>
  import TabItem from "./TabItem";
  import TabAltItem from "@/components/TabAltItem";
  export default {
    props: ['todos', 'alts'],
    components: {
      TabItem, TabAltItem
    }
  }
</script>