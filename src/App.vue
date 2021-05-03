<template>
  <div id="app">
    <Test />
    <ToggleButton />
    <Form/>
  </div>
</template>

<script>
import Test from "./components/Test";
import ToggleButton from "./components/ToggleButton";
import Form from "./components/Form";
export default {
  name: 'App',
  components: {
    Test,
    Form,
    ToggleButton
  }
}
</script>

<style>

</style>
