<template>
  <v-layout justify-center>
    <v-flex xs12 md11 lg11 xl11>
      <v-card outlined tile>
        <v-card-title class="headline">
          Toolbox
        </v-card-title>
        <v-card-text class="pa-0">
          <v-row no-gutters>
            <v-col>
              <v-tabs
                v-model="toolSearchTab"
                background-color="#fbfbfb"
                optional
              >
                <v-tab :disabled="toolSearchTab === null">
                  Dates
                </v-tab>
                <v-tab :disabled="toolSearchTab === null">
                  Colors
                </v-tab>
                <v-tab :disabled="toolSearchTab === null">
                  Numbers
                </v-tab>
                <v-tab :disabled="toolSearchTab === null">
                  Data
                </v-tab>
                <div class="ml-auto search-tab">
                  <v-text-field
                    v-model="toolSearchVal"
                    placeholder="Search tool..."
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
              <v-card tile outlined class="no-bx">
                <v-row wrap class="px-4">
                  <v-col
                    v-for="tool in tools"
                    :key="tool.name"
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
                        {{ tool.name }}
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <v-card v-if="selectedTools.length" tile flat class="d-flex">
            <v-row class="tools-container flex-wrap pa-4" no-gutters>
              <tool-card
                v-for="(selectedT, i) in selectedTools"
                :key="`${selectedT.name} ${selectedT.id}`"
                :tool-item="selectedT"
                @remove-click="() => removeTool(i)"
              />
            </v-row>
          </v-card>
          <v-card v-else tile flat class="d-flex" min-height="300px">
            <div class="ma-auto">
              <v-alert
                color="primary"
                prominent
                :dark="!$vuetify.theme.dark"
                border="top"
              >
                Add tools and they will show and stack here!
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
    
  },
  "es": {
    
  }
}
</i18n>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'

export interface ToolBoxItemI {
  name: string
  category: string
  component: string
  id?: number
}

@Component({})
export default class UtilsPage extends Vue {
  toolSearchVal = ''
  toolSearchTab: number | null = 1

  selectedTools: Array<ToolBoxItemI> = []

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
    } as ToolBoxItemI)
  }

  removeTool(index: number) {
    this.selectedTools.splice(index, 1)
  }

  tools: Array<ToolBoxItemI> = [
    {
      name: 'Date format',
      category: 'date',
      component: 't-date-format',
    },
    {
      name: 'Date diff',
      category: 'date',
      component: '',
    },
    {
      name: 'Color picker',
      category: 'color',
      component: '',
    },
    {
      name: 'Color palette',
      category: 'color',
      component: '',
    },
    {
      name: 'Percentage',
      category: 'numbers',
      component: 't-percentage',
    },
    {
      name: 'Timer',
      category: 'dates',
      component: '',
    },
    {
      name: 'JSON',
      category: 'data',
      component: '',
    },
    {
      name: 'SUM',
      category: 'numbers',
      component: '',
    },
  ]
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
