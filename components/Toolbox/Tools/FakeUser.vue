<template>
  <v-card
    tile
    :loading="loading"
    flat
    style="background-color: #fdfdfd"
    class="pl-3 pr-3 pt-1 pb-2"
    width="100%"
  >
    <template v-if="!loading">
      <v-row no-gutters class="my-2">
        <v-col>
          <v-btn tile depressed color="info darken-1" small disabled>
            Advanced
          </v-btn>
        </v-col>
        <v-col class="flex-grow-0">
          <v-btn tile depressed color="primary" small @click="fakerUserFn()">
            ReGenerate
          </v-btn>
        </v-col>
      </v-row>
      <v-card tile outlined class="px-3">
        <v-row align="center">
          <v-col class="flex-grow-0" style="min-width: 140px"> Name: </v-col>
          <v-col :title="fakerUser.firstname">
            {{ fakerUser.firstname }}
          </v-col>
          <v-col class="flex-grow-0">
            <v-btn
              tile
              outlined
              small
              title="Copy to clipboard"
              @click="copyToClipboard(fakerUser.firstname)"
            >
              <v-icon small> mdi-clipboard-multiple-outline </v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col class="flex-grow-0" style="min-width: 140px">
            Last name:
          </v-col>
          <v-col :title="fakerUser.lastname"> {{ fakerUser.lastname }} </v-col>
          <v-col class="flex-grow-0">
            <v-btn
              tile
              outlined
              small
              title="Copy to clipboard"
              @click="copyToClipboard(fakerUser.lastname)"
            >
              <v-icon small> mdi-clipboard-multiple-outline </v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col class="flex-grow-0" style="min-width: 140px">
            Nickname:
          </v-col>
          <v-col :title="fakerUser.username"> {{ fakerUser.username }} </v-col>
          <v-col class="flex-grow-0">
            <v-btn
              tile
              outlined
              small
              title="Copy to clipboard"
              @click="copyToClipboard(fakerUser.username)"
            >
              <v-icon small> mdi-clipboard-multiple-outline </v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col class="flex-grow-0" style="min-width: 140px"> Email: </v-col>
          <v-col :title="fakerUser.email" class="d-inline-block text-truncate">
            {{ fakerUser.email }}
          </v-col>
          <v-col class="flex-grow-0">
            <v-btn
              tile
              outlined
              small
              title="Copy to clipboard"
              @click="copyToClipboard(fakerUser.email)"
            >
              <v-icon small> mdi-clipboard-multiple-outline </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </template>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
const fakerPromise = () => import('faker')

interface FakerUserI {
  username?: string
  firstname?: string
  lastname?: string
  email?: string
  password?: string
}

@Component({})
export default class FakeUserTool extends Vue {
  faker!: Faker.FakerStatic

  loading = false

  fakerUser: FakerUserI = {}

  fakerUserFn() {
    const firstname = this.faker.name.firstName()
    const lastname = `${this.faker.name.lastName()} ${this.faker.name.lastName()}`

    this.fakerUser = {
      username: this.faker.internet.userName(firstname, lastname),
      firstname,
      lastname,
      email: this.faker.internet
        .email(firstname, lastname)
        .toLowerCase()
        .replace('.com', '-mock.com'),
      password: 'Sakai.22',
    }
  }

  // async test() {
  //   this.copyToClipboard(this.fakerUser.username)
  //   console.log(this.fakerUser.username)
  //   await new Promise((resolve) => setTimeout(resolve, 1000))
  //   this.copyToClipboard(this.fakerUser.lastname)
  //   console.log(this.fakerUser.lastname)
  //   await new Promise((resolve) => setTimeout(resolve, 1000))
  //   this.copyToClipboard(this.fakerUser.email)
  //   console.log(this.fakerUser.email)
  // }

  async copyToClipboard(val: string | undefined) {
    if (!navigator.clipboard) {
      console.error('Clipboard feature not supported in this browser')
      return
    }
    await navigator.clipboard.writeText(val || '')
  }

  async mounted() {
    this.loading = true
    this.faker = await fakerPromise()
    this.fakerUserFn()
    this.loading = false
  }
}
</script>
