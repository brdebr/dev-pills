<template>
  <div>
    <v-img :src="imgSrc()" :lazy-src="imgSrc()" :alt="alt" :title="alt" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
  methods: {
    imgSrc() {
      try {
        return require(`~/assets/images${this.src}`)
      } catch (error) {
        return null
      }
    },
  },
}
</script>
