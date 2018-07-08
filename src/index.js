import Vue from 'vue'
import Counter from './Counter/index.vue'

const leCounter = new Vue({
  render: exec => exec(Counter, { props: { min: 0 } })
})

leCounter.$mount(document.getElementById('vueapp'))
