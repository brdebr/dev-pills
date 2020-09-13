<template>
  <page-container cols="12,11">
    <v-card outlined tile>
      <v-card-title class="headline">
        {{ article.title }}
      </v-card-title>
      <v-card-text :class="!$store.state.layout.isMobile ? 'px-5' : 'px-2'">
        <nuxt-content :document="article" />
      </v-card-text>
    </v-card>
  </page-container>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { ArticleI } from '@/types/global'
import { articleHeadObjBuilder } from '@/utils/functions'

@Component<ArticlePage>({
  head() {
    return articleHeadObjBuilder(this.article, this.$i18n.locale)
  },
  async asyncData(ctx) {
    const article = await ctx
      .$content('articles', ctx.app.i18n.locale, ctx.params.slug)
      .fetch()
    return {
      article,
    }
  },
})
export default class ArticlePage extends Vue {
  article!: ArticleI
}
</script>
