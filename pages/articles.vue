<template>
  <page-container cols="12,11">
    <v-card outlined tile>
      <v-card-title class="headline">
        {{ $t('heading') }}
      </v-card-title>
      <v-card-text :class="!$store.state.layout.isMobile ? 'px-5' : 'px-2'">
        <template v-for="article in articles">
          <article-card :key="article.slug" :article="article" />
        </template>
      </v-card-text>
    </v-card>
  </page-container>
</template>
<i18n>
{
  "en": {
    "heading": "Articles"
  },
  "es": {
    "heading": "Artículos"
  }
}
</i18n>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { ArticleI } from '@/types/global'

@Component({
  head() {
    return {
      title: 'Articles',
    }
  },
  async asyncData(ctx) {
    const articles = await ctx.$content('articles', ctx.app.i18n.locale).fetch()
    // console.log(articles)
    return {
      articles,
    }
  },
})
export default class ArticlesPage extends Vue {
  articles!: [ArticleI]
}
</script>
