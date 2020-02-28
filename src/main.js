import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/vue-boostrap'
import './styles/main.scss'
import 'swiper/css/swiper.min.css'
import 'animate.css/animate.min.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
