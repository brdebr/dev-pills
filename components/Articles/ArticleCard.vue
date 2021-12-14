<template>
  <v-card
    v-if="article"
    v-ripple="false"
    tile
    outlined
    max-width="600px"
    :to="`article/${article.slug}`"
    class="article-card"
    color="primary"
  >
    <v-hover #default="{ hover }">
      <v-img
        class="white--text align-start"
        height="320px"
        :alt="article.image['alt-text']"
        :src="article.image.route"
        :lazy-src="article.image.route"
      >
        <v-fade-transition>
          <v-card-title
            v-if="!hover"
            class="bg-above-img py-3 px-5 flex-nowrap"
            style="word-break: break-word"
          >
            <div class="article-card__title">
              {{ article.title }}
            </div>
          </v-card-title>
        </v-fade-transition>
        <div class="mr-2 mb-2" style="position: absolute; bottom: 0; right: 0">
          <v-tooltip
            bottom
            nudge-left="94"
            nudge-bottom
            z-index="3"
            transition="fade-transition"
            close-delay="1000"
            max-width="250px"
            color="primary darken-3 article-tooltip--content"
          >
            <template #activator="{ on, attrs }">
              <div v-bind="attrs" class="ml-2" v-on="on">
                <v-btn
                  tile
                  depressed
                  small
                  color="white"
                  class="px-1"
                  style="z-index: 5"
                >
                  <v-icon color="primary darken-1">
                    mdi-information-variant
                  </v-icon>
                </v-btn>
              </div>
            </template>
            <div class="article-tooltip">
              <div>
                <b> Article updated: </b>
              </div>
              <div>
                {{ formatDate(article.updatedAt) }}
              </div>
              <div>
                <b> Photo attribution: </b>
              </div>
              <div v-html="article.image.mention" />
            </div>
          </v-tooltip>
        </div>
        <v-fade-transition>
          <div
            v-if="hover"
            class="d-flex px-5 pt-1 pb-9 v-card--reveal white--text"
          >
            <div v-text="article.description" />
          </div>
        </v-fade-transition>
      </v-img>
    </v-hover>
    <v-row no-gutters class="white">
      <v-col>
        <v-chip
          v-for="category in article.categories"
          :key="category"
          text
          outlined
          class="rounded-0 mx-2 my-2"
          color="primary"
        >
          <b class="mr-2">#</b> {{ category }}
        </v-chip>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { ArticleI } from '@/types/global'
import { Prop } from 'vue-property-decorator'
import moment from 'moment'

@Component({})
export default class ArticleCard extends Vue {
  @Prop()
  article!: ArticleI

  formatDate(val: string) {
    return moment(val).format('dddd DD/MM/YYYY HH:mm')
  }
}
</script>

<style lang="scss">
.bg-above-img {
  background-color: transparentize(#00413a, 0.2);
}
.article-card {
  &__title {
  }
}
.article-tooltip {
  &--content {
    pointer-events: all !important;
  }
  a {
    color: #fff !important;
  }
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  letter-spacing: 0.8px;
  line-height: 2rem;
  background-color: transparentize(#003831, 0.10) !important;
  backdrop-filter: blur(10px);
  > div {
    white-space: pre-line;
    font-family: Roboto;
    letter-spacing: 2px;
    font-size: 17px;
    word-break: break-word;
  }
}
</style>
