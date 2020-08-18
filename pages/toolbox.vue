<template>
  <v-layout justify-center>
    <v-flex xs12 md11 lg11 xl11>
      <v-card outlined tile>
        <v-card-title v-t="'headline'" class="headline" />
        <v-card-text class="pa-0">
          <v-row no-gutters>
            <v-col>
              <v-tabs
                v-model="toolSearchTab"
                background-color="#fbfbfb"
                optional
              >
                <v-tab class="rbt-font" :disabled="toolSearchTab === null">
                  {{ $t('tab-all') }}
                </v-tab>
                <v-tab class="rbt-font" :disabled="toolSearchTab === null">
                  {{ $t('tab-dates') }}
                </v-tab>
                <v-tab class="rbt-font" :disabled="toolSearchTab === null">
                  {{ $t('tab-colors') }}
                </v-tab>
                <v-tab class="rbt-font" :disabled="toolSearchTab === null">
                  {{ $t('tab-numbers') }}
                </v-tab>
                <v-tab class="rbt-font" :disabled="toolSearchTab === null">
                  {{ $t('tab-data') }}
                </v-tab>
                <div class="ml-auto search-tab">
                  <v-text-field
                    v-model="toolSearchVal"
                    :placeholder="$t('search-tool')"
                    dense
                    solo
                    solo-inverted
                    flat
                    outlined
                    full-width
                    height="48px"
                    hide-no-data
                    hide-details
                    color="indigo accent-2"
                    append-icon="mdi-magnify v-autocomplete--icon-no-rotate "
                    class="rounded-0 flex-grow-1"
                  />
                </div>
              </v-tabs>
            </v-col>
          </v-row>
          <v-row no-gutters class="tool-search-values">
            <v-col>
              <v-card tile outlined class="no-bx py-2 no-bb">
                <v-row wrap class="px-4">
                  <v-col
                    v-for="tool in tools"
                    :key="tool.name.en"
                    lg="2"
                    md="3"
                    sm="4"
                    cols="12"
                  >
                    <v-card
                      tile
                      outlined
                      class="text-center"
                      :disabled="!tool.component"
                      @click="addTool(tool)"
                    >
                      <v-card-text>
                        {{ tool.name[$i18n.locale] }}
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <v-card
            v-if="selectedTools.length"
            tile
            flat
            outlined
            class="d-flex mx-4 pt-2 no-bx no-bb"
          >
            <v-row class="tools-container flex-wrap">
              <tool-card
                v-for="(selectedT, i) in selectedTools"
                :key="`${selectedT.name.en} ${selectedT.id}`"
                :tool-item="selectedT"
                @remove-click="() => removeTool(i)"
              />
            </v-row>
          </v-card>
          <v-card
            v-else
            tile
            flat
            outlined
            class="d-flex mx-4 no-bx no-bb"
            min-height="300px"
          >
            <div class="ma-auto">
              <v-alert
                color="primary"
                prominent
                :dark="!$vuetify.theme.dark"
                border="top"
              >
                {{ $t('no-tools') }}
              </v-alert>
            </div>
          </v-card>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<i18n>
{
  "en": {
    "headline": "Toolbox",
    "no-tools" : "Click the cards above to add tools, they will show and stack here!",
    "tab-all": "All",
    "tab-dates": "Dates",
    "tab-colors": "Colors",
    "tab-numbers": "Numbers",
    "tab-data": "Data",
    "search-tool": "Search tool..."
  },
  "es": {
    "headline": "Caja de herramientas",
    "no-tools" : "Haz click en las cartas de la parte superior para que se muestren y apilen aquí!",
    "tab-all": "Todas",
    "tab-dates": "Fechas",
    "tab-colors": "Colores",
    "tab-numbers": "Números",
    "tab-data": "Datos",
    "search-tool": "Buscar herramienta..."
  }
}
</i18n>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'

export interface ToolItemI {
  name: {
    en: string
    es: string
  }
  category: string
  component: string
  id?: number
}

@Component({
  async asyncData(ctx) {
    const tools: { list: [ToolItemI] } = await ctx.$content('tools').fetch()
    return {
      tools: tools.list,
    }
  },
})
export default class UtilsPage extends Vue {
  toolSearchVal = ''
  toolSearchTab: number | null = 0

  selectedTools: Array<ToolItemI> = []

  @Watch('toolSearchVal')
  setTabState(newVal: string) {
    if (!newVal) {
      this.toolSearchTab = 0
      return
    } // String is not blank

    if (this.toolSearchTab != null) {
      this.toolSearchTab = null
    }
  }

  addTool(tool: Object) {
    this.selectedTools.push({
      ...tool,
      id: new Date().getTime(),
    } as ToolItemI)
  }

  removeTool(index: number) {
    this.selectedTools.splice(index, 1)
  }

  tools: Array<ToolItemI> = []
}
</script>

<style lang="scss">
.search-tab {
  .v-autocomplete,
  .v-text-field {
    .v-input__control {
      .v-input__slot {
        fieldset {
          border: 0 !important;
        }
      }
    }
  }
}
</style>
