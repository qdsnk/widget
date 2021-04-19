<template>
  <p>{{ alt.text }}</p>
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