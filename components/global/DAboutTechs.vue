<template>
  <v-lazy>
    <v-simple-table
      v-if="!$vuetify.breakpoint.xsOnly"
      :dark="$vuetify.theme.dark"
    >
      <template #default>
        <thead>
          <tr>
            <th class="text-center">
              <v-icon :title="$t('title')">
                mdi-open-in-new
              </v-icon>
            </th>
            <th class="text-left">
              {{ $t('tech') }}
            </th>
            <th class="text-left">
              {{ $t('desc') }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.name">
            <td class="text-center">
              <v-btn
                tile
                depressed
                small
                class="pa-0"
                color="#fafafa"
                target="_blank"
                rel="noreferrer"
                :href="item.link"
              >
                <img
                  v-if="item.icon.startsWith('image---')"
                  style="height: 20px;"
                  :src="getImage(item)"
                />
                <v-icon v-else>
                  {{ item.icon }}
                </v-icon>
              </v-btn>
            </td>
            <td>
              {{ item.name }}
            </td>
            <td>
              {{ item.description }}
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-row v-else class="flex-wrap">
      <v-col v-for="item in items" :key="item.name" cols="12">
        <v-card tile outlined>
          <div class="d-flex align-center pt-3">
            <div class="ml-4 mr-6">
              <v-btn
                tile
                depressed
                small
                color="#fafafa"
                target="_blank"
                rel="noreferrer"
                :href="item.link"
              >
                <img
                  v-if="item.icon.startsWith('image---')"
                  style="height: 20px;"
                  :src="getImage(item)"
                />
                <v-icon v-else>
                  {{ item.icon }}
                </v-icon>
              </v-btn>
            </div>
            <div>
              {{ item.name }}
            </div>
          </div>
          <v-card-text>
            {{ item.description }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-lazy>
</template>
<i18n>
{
  "en" : {
    "title": "Link to technology page",
    "tech": "Technology",
    "desc": "Description"
  },
  "es" : {
    "title": "Enlace a su página",
    "tech": "Tecnología",
    "desc": "Descripción"
  }
}
</i18n>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
const vueSvg = require('@/assets/images/icons/vue-icon.svg')
const netlifySvg = require('@/assets/images/icons/netlify-icon.svg')
const PWASvg = require('@/assets/images/icons/pwa-icon.svg')

interface TechI {
  name: string
  description: string
  icon: string
  link: string
}

@Component({})
export default class DTable extends Vue {
  @Prop()
  items!: [TechI]

  getImage(item: TechI) {
    switch (item.name) {
      case 'Vue':
        return vueSvg
      case 'Netlify':
        return netlifySvg
      case 'Nuxt PWA':
        return PWASvg
      default:
        return ''
    }
  }
}
</script>

<style lang="scss">
.theme--light.v-data-table {
  > .v-data-table__wrapper {
    > table {
      > tbody {
        > tr {
          &:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper) {
            background: #f0f9f6 !important;
          }
        }
      }
    }
  }
}
</style>
