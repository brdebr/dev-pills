<template>
  <v-simple-table :dark="$vuetify.theme.dark">
    <template #default>
      <thead>
        <tr>
          <th class="text-center">
            <v-icon title="Link to technology">
              mdi-open-in-new
            </v-icon>
          </th>
          <th class="text-left">Technology</th>
          <th class="text-left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.name">
          <td class="text-center">
            <v-btn
              tile
              outlined
              small
              color="grey"
              target="_blank"
              rel="noreferrer"
              :href="item.link"
            >
              <v-icon>
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
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

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
}
</script>
