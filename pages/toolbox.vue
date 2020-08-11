<template>
  <v-layout justify-center>
    <v-flex xs12 md10 lg11 xl10>
      <v-card outlined tile>
        <v-card-title class="headline">
          Toolbox
        </v-card-title>
        <v-divider />
        <v-card-text>
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
              <v-card tile outlined>
                <v-row wrap class="px-4">
                  <v-col v-for="tool in tools" :key="tool.name" cols="2">
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
          <v-row class="tools-container">
            <v-col
              v-for="(selectedT, i) in selectedTools"
              :key="`${selectedT.name} ${i}`"
            >
              <p>
                {{ selectedT.name }}
              </p>
              <v-row class="flex-wrap">
                <component :is="selectedT.component" />
              </v-row>
            </v-col>
          </v-row>
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

interface ToolBoxItemI {
  name: string
  category: string
  component: string
}

@Component({
  components: {
    't-percentage': () => import('@/components/Toolbox/Percentage.vue'),
  },
})
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
    console.log({ tool })
    this.selectedTools.push({ ...tool } as ToolBoxItemI)
  }

  tools: Array<ToolBoxItemI> = [
    {
      name: 'Date format',
      category: 'date',
      component: '',
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
