<template>
  <page-container cols="12,_,10,11,10">
    <v-card outlined tile>
      <v-card-title v-t="'headline'" class="headline" />
      <v-card-text>
        <v-row no-gutters>
          <v-col>
            <p v-t="'message'" />
          </v-col>
        </v-row>
        <v-row>
          <v-col
            v-for="(item, i) in $store.getters['layout/homeItems']"
            :key="i"
            cols="12"
            md="6"
            lg="4"
          >
            <SectionCard :title="item.title[$i18n.locale]" :item="item" />
          </v-col>
        </v-row>
      </v-card-text>
      <!-- <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary darken-1"
          nuxt
          :to="localePath('/about')"
          tile
          class="rbt-font"
          depressed
        >
          About page
        </v-btn>
      </v-card-actions> -->
    </v-card>
  </page-container>
</template>
<i18n>
{
  "en": {
    "headline": "Welcome to Dev-Pills",
    "message": "Personal blog to archive development tutorials, snippets, etc"
  },
  "es": {
    "headline": "Bienvenido a Dev-Pills",
    "message": "Blog personal para archivar tutoriales de desarrollo, código reutilizable, etc"
  }
}
</i18n>

<script>
import SectionCard from '@/components/Main/SectionCard'
export default {
  name: 'IndexPage',
  components: {
    SectionCard,
  },
  head() {
    return {
      title: 'Home',
    }
  },
}
</script>
