<template>
  <div id="app">
    <ToggleButton />
    <Form />
  </div>
</template>

<script>
import ToggleButton from "./components/ToggleButton";
import Form from "./components/Form";

export default {
  name: 'App',
  components: {
    Form,
    ToggleButton
  }
}
</script>

<style>

</style>
