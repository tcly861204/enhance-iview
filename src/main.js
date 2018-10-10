import Vue from 'vue'
import App from './App.vue'
import router from './router'
import enhance from './libs';

Vue.config.productionTip = false

Vue.use(enhance)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
