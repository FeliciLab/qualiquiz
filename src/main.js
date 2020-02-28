import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/vue-boostrap'
import './styles/main.scss'
import 'swiper/css/swiper.min.css'
import VueTheMask from 'vue-the-mask'
import 'animate.css/animate.min.css'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VueTheMask)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
