<template>
  <v-container class="align-self-start">
    <v-card outlined tile class="pa-5">
      <h1 v-if="error.statusCode === 404" class="mb-3">
        {{ pageNotFound }}
      </h1>
      <h1 v-else>
        <div>
          {{ otherError }}
        </div>
        <div>
          {{ error.message }}
        </div>
      </h1>
      <NuxtLink to="/">
        Home page
      </NuxtLink>
    </v-card>
  </v-container>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
