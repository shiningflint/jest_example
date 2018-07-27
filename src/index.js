import Counter from './Counter/index.vue'

function getComponent() {
  return import(/* webpackChunkName: "vue" */ 'vue').then(vue => {
    return vue.default
  }).catch(error => 'PLANE CRASHING! WORLD ENDING!')
}

document.getElementById('load-vue').onclick = function(e) {
  getComponent().then(Vue => {
    const leCounter = new Vue({
      render: exec => exec(Counter, { props: { min: 0 } })
    })

    leCounter.$mount(document.getElementById('vueapp'))

    e.target.outerHTML = ''
  })
}
