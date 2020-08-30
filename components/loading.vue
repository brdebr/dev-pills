<template>
  <div style="display: none;"></div>
</template>
<script>
export default {
  methods: {
    start() {
      this.$store.commit('layout/setLoading', true)
    },
    finish() {
      this.$store.commit('layout/setLoading', false)
    },
  },
}
</script>
