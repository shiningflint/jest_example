import Vue from 'vue'
import Counter from './Counter/index.vue'

const leCounter = new Vue({
  render: exec => exec(Counter)
})

leCounter.$mount(document.getElementById('vueapp'))
