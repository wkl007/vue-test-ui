import Vue from 'vue'
import App from './App.vue'
import WklUI from '../components/index'
import '../components/style'

Vue.use(WklUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
