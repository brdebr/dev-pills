<template>
  <v-card tile flat style="background-color: #fdfdfd;" width="100%">
    <v-card-text>
      <v-row no-gutters>
        <v-col cols="4" class="px-1">
          <v-text-field
            v-model="dateString"
            dense
            solo
            flat
            outlined
            full-width
            hide-details
            class="rounded-0"
          />
        </v-col>
        <v-col cols="4" class="px-1">
          <v-text-field
            v-model="formatString"
            dense
            solo
            flat
            outlined
            full-width
            hide-details
            class="rounded-0"
          />
        </v-col>
        <v-col cols="4" class="px-1">
          <v-text-field
            v-model="outputFormatString"
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
      <v-row no-gutters class="px-1 mt-3">
        <v-text-field
          :value="result"
          dense
          solo
          flat
          disabled
          outlined
          full-width
          hide-details
          class="rounded-0"
        />
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import moment from 'moment'

@Component({})
export default class DateFormat extends Vue {
  dateString = ''
  formatString = ''
  outputFormatString = ''

  get result() {
    if (!this.dateString || !this.formatString || !this.outputFormatString) {
      return
    }
    return moment(this.dateString, this.formatString).format(
      this.outputFormatString
    )
  }
}
</script>
