import Vue from 'vue'

Vue.directive('no-autoc', {
  bind(el) {
    el.querySelector('input').setAttribute('autocomplete', 'off')
  },
})
