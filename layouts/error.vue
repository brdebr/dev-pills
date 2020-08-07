<template>
  <v-container class="align-self-start">
    <v-layout justify-center>
      <v-flex xs9>
        <v-card outlined tile>
          <template v-if="error.statusCode === 404">
            <v-card-title style="background-color: #f6bebe;">
              <span>
                Sorry couldn't find that page 😢
              </span>
              <span class="font-italic ml-auto text--secondary">
                "{{ $router.history.current.fullPath }}"
              </span>
            </v-card-title>
            <v-divider />
            <v-card-text>
              <p>
                This may be because one of this reasons:
              </p>
              <ul>
                <li>
                  This page is not done yet.
                </li>
                <li>
                  Some unknown error happened.
                </li>
                <li>
                  Something went wrong :/
                </li>
                <li>
                  The page was done but my dog ate it, sad history.
                </li>
              </ul>
            </v-card-text>
          </template>
          <template v-else>
            <div class="pa-5">
              <h1>
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
            </div>
          </template>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: 'default',
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
