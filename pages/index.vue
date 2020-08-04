<template>
  <v-layout justify-center>
    <v-flex xs12 sm10>
      <v-card>
        <v-card-title class="headline">
          Welcome to DevPills
        </v-card-title>
        <v-card-text>
          <p>
            Personal blog to archive development tutorials, snippets, etc
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/about">
            About page
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {}
</script>
