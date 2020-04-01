import Vue from 'vue'
import App from './App.vue'
import Owner from './ownerInfo.vue'

Vue.component('new-owner', Owner)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
})
