import Vue from 'vue'
import Test from './test.vue'

import TestCase from '../src/toast.js'
// import TestCase from '../dist/index'

Vue.use(TestCase)

new Vue({
  el: '#app',
  components: {Test},
  template: '<Test/>',
  mounted() {
    this.$toast({
      content: 'A touch Of Zen',
    })
  }
})