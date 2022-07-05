import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import(/* webpackChunkName: "Layout" */ '../layout'),
    children: [
      {
        path: '',
        name: 'ConcertMgmt',
        component: () =>
          import(/* webpackChunkName: "Layout" */ '@/views/concert/mgmt'),
      },
      // Examples,
    ],
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
