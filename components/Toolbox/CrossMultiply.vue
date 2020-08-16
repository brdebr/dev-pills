<template>
  <v-card tile flat style="background-color: #fdfdfd;" width="100%">
    <v-row class="px-2">
      <v-col cols="6">
        <v-text-field
          v-if="getOnlyVal(whichIsBlank) === 'tl'"
          dense
          solo
          flat
          outlined
          full-width
          disabled
          :value="tlV"
          hide-details
          class="rounded-0"
        />
        <v-text-field
          v-else
          v-model="tl"
          dense
          solo
          flat
          outlined
          full-width
          hide-details
          class="rounded-0"
        />
      </v-col>
      <v-col cols="6">
        <v-text-field
          v-if="getOnlyVal(whichIsBlank) === 'tr'"
          dense
          solo
          flat
          outlined
          full-width
          :value="trV"
          hide-details
          disabled
          class="rounded-0"
        />
        <v-text-field
          v-else
          v-model="tr"
          dense
          solo
          flat
          outlined
          full-width
          hide-details
          class="rounded-0"
        />
      </v-col>
    </v-row>
    <v-row class="px-2">
      <v-col cols="6">
        <v-text-field
          v-if="getOnlyVal(whichIsBlank) === 'bl'"
          dense
          solo
          flat
          outlined
          full-width
          :value="blV"
          disabled
          hide-details
          class="rounded-0"
        />
        <v-text-field
          v-else
          v-model="bl"
          dense
          solo
          flat
          outlined
          full-width
          hide-details
          class="rounded-0"
        />
      </v-col>
      <v-col cols="6">
        <v-text-field
          v-if="getOnlyVal(whichIsBlank) === 'br'"
          dense
          solo
          flat
          outlined
          :value="brV"
          disabled
          full-width
          hide-details
          class="rounded-0"
        />
        <v-text-field
          v-else
          v-model="br"
          dense
          solo
          flat
          outlined
          full-width
          hide-details
          class="rounded-0"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'

@Component({})
export default class CrossMultiply extends Vue {
  // Top-lef, Top-Right, Bottom-left...
  tl = 0
  tr = 0
  bl = 0
  br = 0

  tlV = '0'
  trV = '0'
  blV = '0'
  brV = '0'

  getOnlyVal(val: string) {
    return val.substr(0, 2)
  }

  @Watch('whichIsBlank')
  setCalculated(newVal: string) {
    switch (this.getOnlyVal(newVal)) {
      case 'tl':
        this.tlV = ((this.bl * this.tr) / this.br).toFixed(2)
        break
      case 'tr':
        this.trV = ((this.tl * this.br) / this.bl).toFixed(2)
        break
      case 'bl':
        this.blV = ((this.tl * this.br) / this.tr).toFixed(2)
        break
      case 'br':
        this.brV = ((this.bl * this.tr) / this.tl).toFixed(2)
        break
      default:
        break
    }
  }

  get whichIsBlank() {
    if (this.tr && this.bl && this.br) {
      return 'tl ' + new Date().getTime()
    }
    if (this.tl && this.bl && this.br) {
      return 'tr ' + new Date().getTime()
    }
    if (this.tl && this.tr && this.br) {
      return 'bl ' + new Date().getTime()
    }
    if (this.tl && this.tr && this.bl) {
      return 'br ' + new Date().getTime()
    }
    return ''
  }
}
</script>
