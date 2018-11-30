import Vue from 'vue'
import Test from './test.vue'

import TestCase from '../src/toast.js'
// import TestCase from '../dist/index'

Vue.use(TestCase, {
  duration: 1000,
})

new Vue({
  el: '#app',
  components: {Test},
  template: '<Test/>',
  mounted() {
    this.$toast('A touch Of Zen')
  }
})