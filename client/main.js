import Vue from 'vue'
import VueRouter from 'vue-router'
import { router } from '@/routers'
import axios from 'axios'
import store from '@/store'

Vue.prototype.$http = axios
Vue.use(VueRouter)

new Vue({ router, store }).$mount('#app')
