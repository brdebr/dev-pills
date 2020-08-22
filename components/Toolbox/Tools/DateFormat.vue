<template>
  <v-card tile flat style="background-color: #fdfdfd;" width="100%">
    <v-card-text>
      <v-row no-gutters>
        <v-col cols="4" class="px-1">
          <v-tooltip top color="primary darken-3">
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="dateString"
                v-no-autoc
                dense
                solo
                flat
                outlined
                :placeholder="snapOfTime.format('DD/MM/YYYY')"
                full-width
                hide-details
                class="rounded-0"
                v-bind="attrs"
                v-on="on"
              />
            </template>
            <div>
              <h5 class="rbt-font">
                Input date examples:
              </h5>
              <ul class="pl-3">
                <li>
                  10/20/2020
                </li>
                <li>
                  Monday 10:22:01
                </li>
              </ul>
            </div>
          </v-tooltip>
        </v-col>
        <v-col cols="4" class="px-1">
          <v-tooltip top color="primary darken-3">
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="formatString"
                v-no-autoc
                dense
                solo
                flat
                outlined
                placeholder="DD/MM/YYYY"
                full-width
                hide-details
                class="rounded-0"
                v-bind="attrs"
                v-on="on"
              />
            </template>
            <div>
              <h5 class="rbt-font">
                Input format examples:
              </h5>
              <ul class="pl-3">
                <li>
                  dd/MM/YYYY
                </li>
                <li>
                  LL hh:mm:ss
                </li>
              </ul>
            </div>
          </v-tooltip>
        </v-col>
        <v-col cols="4" class="px-1">
          <v-tooltip top color="primary darken-3">
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="outputFormatString"
                v-no-autoc
                dense
                solo
                flat
                outlined
                full-width
                placeholder="dddd, MMM DD, YY"
                hide-details
                class="rounded-0"
                v-bind="attrs"
                v-on="on"
              />
            </template>
            <div>
              <h5 class="rbt-font">
                Output format examples:
              </h5>
              <ul class="pl-3">
                <li>
                  dd/MM/YYYY
                </li>
                <li>
                  LL hh:mm:ss
                </li>
              </ul>
            </div>
          </v-tooltip>
        </v-col>
      </v-row>
      <v-row no-gutters class="px-1 mt-3">
        <v-text-field
          :value="result"
          dense
          solo
          flat
          readonly
          :placeholder="`Result would be = ${snapOfTime
            .locale(localeSelected ? 'es' : 'en')
            .format('dddd, MMM DD, YY')}`"
          outlined
          full-width
          hide-details
          class="rounded-0"
          append-icon="mdi-translate"
          @click:append="() => (localeSelected = !localeSelected)"
        />
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import moment from 'moment'

const snapOfTime = moment()

@Component({})
export default class DateFormat extends Vue {
  dateString = ''
  formatString = ''
  outputFormatString = ''
  localeSelected = false

  snapOfTime = snapOfTime

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
