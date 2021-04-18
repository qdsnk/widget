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
  </div>
</template>

<script>
  import TabItem from "./TabItem";
  export default {
    props: ['todos'],
    components: {
      TabItem
    }
  }
</script>