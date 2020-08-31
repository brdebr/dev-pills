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
          class="rounded-0 num-field"
        />
        <v-text-field
          v-else
          v-model="tl"
          v-no-autoc
          clearable
          inputmode="numeric"
          dense
          solo
          flat
          outlined
          full-width
          hide-details
          class="rounded-0 num-field"
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
          class="rounded-0 num-field"
        />
        <v-text-field
          v-else
          v-model="tr"
          v-no-autoc
          clearable
          inputmode="numeric"
          dense
          solo
          flat
          outlined
          full-width
          hide-details
          class="rounded-0 num-field"
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
          class="rounded-0 num-field"
        />
        <v-text-field
          v-else
          v-model="bl"
          v-no-autoc
          clearable
          inputmode="numeric"
          dense
          solo
          flat
          outlined
          full-width
          hide-details
          class="rounded-0 num-field"
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
          class="rounded-0 num-field"
        />
        <v-text-field
          v-else
          v-model="br"
          v-no-autoc
          clearable
          inputmode="numeric"
          dense
          solo
          flat
          outlined
          full-width
          hide-details
          class="rounded-0 num-field"
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
  tl = ''
  tr = ''
  bl = ''
  br = ''

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
        this.tlV = (
          (parseFloat(this.bl) * parseFloat(this.tr)) /
          parseFloat(this.br)
        ).toFixed(2)
        break
      case 'tr':
        this.trV = (
          (parseFloat(this.tl) * parseFloat(this.br)) /
          parseFloat(this.bl)
        ).toFixed(2)
        break
      case 'bl':
        this.blV = (
          (parseFloat(this.tl) * parseFloat(this.br)) /
          parseFloat(this.tr)
        ).toFixed(2)
        break
      case 'br':
        this.brV = (
          (parseFloat(this.bl) * parseFloat(this.tr)) /
          parseFloat(this.tl)
        ).toFixed(2)
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
<style lang="scss">
.num-field {
  input {
    text-align: center;
    font-weight: 500 !important;
  }
  &.v-input--is-disabled {
    fieldset {
      border-style: dashed !important;
    }
  }
  .v-input__append-inner {
    position: absolute !important;
    right: 12px !important;
  }
}
</style>
