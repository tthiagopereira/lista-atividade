import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import {routes} from "./routes";
import './plugs/axios'

import axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(axios)
Vue.use(VueRouter)

const router = new VueRouter( { routes })

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
