<template>
  <div class="global-search">
    <v-autocomplete
      :search-input.sync="searchVal"
      :label="$t('search')"
      dense
      solo
      solo-inverted
      flat
      outlined
      full-width
      :hide-no-data="!searchVal"
      hide-details
      no-data-text="Doesn't work yet..."
      color="indigo accent-2"
      append-icon="mdi-magnify v-autocomplete--icon-no-rotate"
      class="rounded-0 flex-grow-1"
    />
  </div>
</template>
<i18n>
{
  "en": {
    "search": "Search..."
  },
  "es": {
    "search": "Búsqueda..."
  }
}
</i18n>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class GlobalSearch extends Vue {
  searchVal = ''
}
</script>

<style lang="scss">
.global-search {
  min-width: 250px;
  transition: min-width 0.25s ease-out;
  &:focus-within {
    min-width: 550px;
  }
  > .v-text-field {
    &.v-input--is-focused {
      fieldset {
        border-width: 3px !important;
      }
    }
    .v-select__slot {
      > label {
        margin-left: 5px;
        font-weight: 400 !important;
        letter-spacing: 0.9px;
        font-family: 'Roboto', serif !important;
      }
    }
  }
}
</style>
