import Vue from 'vue'
import App from './App.vue'

/* 按需引入 */
import WklUI from 'wkl-ui/lib/wkl-ui.umd'

Vue.use(WklUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
