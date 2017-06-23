import VueRouter from 'vue-router'
import App from '@/App.vue'
import Hello from '@/components/Hello'
import Todo from '@/components/Todo'

export const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: App,
      children: [
        { path: '/', component: Hello },
        { path: '/hello', component: Hello },
        { path: '/todo', component: Todo }
      ]
    }
  ]
})

