<template>
  <v-card tile outlined>
    <v-card-title> Sakai - Maven command builder </v-card-title>
    <v-divider />
    <v-card-title>
      <v-row no-gutters class="flex-wrap">
        <v-col
          cols="12"
          class="d-flex align-center justify-space-between pb-3 pt-1"
        >
          <v-checkbox
            v-model="mvnGoals"
            hide-details
            multiple
            class="flex-grow-0 mx-2 my-0 py-0"
            label="Clean"
            value="clean"
          />
          <v-checkbox
            v-model="mvnGoals"
            hide-details
            multiple
            class="flex-grow-0 mx-2 my-0 py-0"
            label="Install"
            value="install"
          />
          <v-radio-group
            v-model="deployMode"
            hide-details
            class="ma-0 pa-0"
            row
          >
            <v-radio
              hide-details
              class="flex-grow-0 mx-2 my-0 py-0"
              label="Deploy"
              value="sakai:deploy"
            />
            <v-radio
              label="Exploded wars"
              class="flex-grow-0 mx-2 my-0 py-0"
              hide-details
              value="sakai:deploy-exploded"
            />
          </v-radio-group>
          <v-checkbox
            v-model="mvnOptions"
            hide-details
            multiple
            class="flex-grow-0 mx-2 my-0 py-0"
            label="Skip tests"
            value="-Dmaven.test.skip=true"
          />
          <v-checkbox
            v-model="mvnOptions"
            hide-details
            multiple
            class="flex-grow-0 mx-2 my-0 py-0"
            label="Print debug"
            value="-X"
          />
          <v-checkbox
            v-model="mvnOptions"
            hide-details
            multiple
            class="flex-grow-0 mx-2 my-0 py-0"
            label="Maven Offline"
            value="-o"
          />
        </v-col>
        <v-col cols="12" class="my-3">
          <v-text-field
            v-model="tomcatPath"
            label="Tomcat path"
            clearable
            clear-icon="mdi-close-box-outline mr-4"
            dense
            solo
            solo-inverted
            flat
            outlined
            full-width
            hide-details
            color="indigo accent-2"
            append-icon="mdi-magnify"
            class="rounded-0"
          />
        </v-col>
        <v-col>
          <v-card tile outlined flat color="indigo accent-2">
            <v-card-text class="pa-3 white">
              <v-row no-gutters class="align-center">
                <v-col class="pr-3" style="word-break: break-word">
                  {{ command }}
                </v-col>
                <v-col class="flex-grow-0">
                  <v-btn
                    tile
                    color="primary"
                    depressed
                    title="Copy command to clipboard"
                    @click="copyToClipboard(command)"
                  >
                    <v-icon> mdi-clipboard-text-outline </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-title>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class MvnBuilder extends Vue {
  get command() {
    return `mvn ${this.mvnGoals.join(' ')} ${
      this.deployMode
    } ${this.mvnOptions.join(
      ' '
    )} -Djava.net.preferIPv4Stack=true -Dmaven.tomcat.home=${
      this.tomcatPath || '[Enter your tomcat homepath]'
    } -Dsakai.home=${this.tomcatPath || '[Enter your tomcat homepath]'}\\sakai`
  }

  tomcatPath = ''

  async copyToClipboard(val: string | undefined) {
    if (!navigator.clipboard) {
      console.error('Clipboard feature not supported in this browser')
      return
    }
    await navigator.clipboard.writeText(val || '')
  }

  deployMode = 'sakai:deploy'
  mvnGoals = ['clean', 'install']
  mvnOptions = ['-Dmaven.test.skip=true']
}
</script>

<style></style>
