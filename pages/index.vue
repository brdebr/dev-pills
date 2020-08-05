<template>
  <v-layout justify-center>
    <v-flex xs12 sm10>
      <v-card outlined tile>
        <v-card-title class="headline">
          Welcome to DevPills
        </v-card-title>
        <v-card-text>
          <p v-t="'message'"></p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/about" tile depressed>
            About page
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<i18n>
{
  "en": {
    "message": "Personal blog to archive development tutorials, snippets, etc"
  },
  "es": {
    "message": "Blog personal para archivar tutoriales de desarrollo, código reutilizable, etc"
  }
}
</i18n>

<script>
export default {}
</script>
