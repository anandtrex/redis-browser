import Vue from 'vue'
import axios from 'axios'
import Vuetify from 'vuetify'

import App from './App'
import router from './router'

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(Vuetify)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')
