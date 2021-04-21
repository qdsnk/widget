<template>
  <div>
    <p>{{ alt.text }}</p>
    <div class="btn-wrapper">
      <div class="input-answer" data-value='1'>
        <input id="input" type="text">
      </div>
      <div id="confirm" class="btn" data-value='1'>Ок</div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    alt: {
      type: Object,
      required: true
    }
  },
}
</script>