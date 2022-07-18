import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import(/* webpackChunkName: "Layout" */ '../layout'),
    children: [
      {
        // 콘서트 관리
        path: '/concert/concert-mgmt',
        name: 'ConcertMgmt',
        component: () =>
          import(/* webpackChunkName: "concert" */ '@/views/concert/mgmt'),
      },
      {
        // 콘서트 관리 상세
        path: '/concert/concert-mgmt/detail',
        name: 'ConcertMgmtDetail',
        component: () =>
          import(
            /* webpackChunkName: "concert" */ '@/views/concert/mgmt/Detail.vue'
          ),
      },
      {
        // 좌석 정보
        path: '/concert/seat-info',
        name: 'SeatInfo',
        component: () =>
          import(/* webpackChunkName: "concert" */ '@/views/concert/seat-info'),
      },
      {
        // 좌석 정보 상세
        path: '/concert/seat-info/detail',
        name: 'SeatInfoDetail',
        component: () =>
          import(
            /* webpackChunkName: "concert" */ '@/views/concert/seat-info/Detail.vue'
          ),
      },
      {
        // 좌석 정보 상세
        path: '/concert/seat-info/add',
        name: 'SeatInfoAdd',
        component: () =>
          import(
            /* webpackChunkName: "concert" */ '@/views/concert/seat-info/Add.vue'
          ),
      },
      {
        // 아티스트 관리
        path: '/basic-info/artist',
        name: 'ArtistMgmt',
        component: () =>
          import(
            /* webpackChunkName: "basic-info" */ '@/views/basic-info/artist'
          ),
      },
      {
        // 아티스트 관리 상세
        path: '/basic-info/artist/detail/:id',
        name: 'ArtistMgmtDetail',
        component: () =>
          import(
            /* webpackChunkName: "basic-info" */ '@/views/basic-info/artist/Detail.vue'
          ),
      },
      {
        // 응원도구 관리
        path: '/basic-info/cheering-tool',
        name: 'CheeringTtoolMgmt',
        component: () =>
          import(
            /* webpackChunkName: "basic-info" */ '@/views/basic-info/cheering-tool'
          ),
      },
      {
        // 응원도구 관리 상세
        path: '/basic-info/cheering-tool/detail:id',
        name: 'CheeringToolDetail',
        component: () =>
          import(
            /* webpackChunkName: "basic-info" */ '@/views/basic-info/cheering-tool/Detail.vue'
          ),
      },
      {
        // 공연별 통계
        path: '/statistics/show',
        name: 'ShowStatistics',
        component: () =>
          import(
            /* webpackChunkName: "statistics" */ '@/views/statistics/show'
          ),
      },
      {
        // 펌웨어 업데이트
        path: '/statistics/firmware',
        name: 'FirmwareUpdate',
        component: () =>
          import(
            /* webpackChunkName: "statistics" */ '@/views/statistics/firmware'
          ),
      },
      {
        // 관리자 관리
        path: '/mgmt/manager',
        name: 'ManagerMgmt',
        component: () =>
          import(/* webpackChunkName: "mgmt" */ '@/views/mgmt/manager'),
      },
      {
        // 코드 관리
        path: '/mgmt/code',
        name: 'CodeMgmt',
        component: () =>
          import(/* webpackChunkName: "mgmt" */ '@/views/mgmt/code'),
      },
      {
        path: '/example/date-picker',
        name: 'DatePicker',
        component: () => import('@/views/example/date-picker'),
      },
      {
        path: '/example/element-ui',
        name: 'ElementUi',
        component: () => import('@/views/example/element-ui'),
      },
      {
        path: '/example/vue-select',
        name: 'VueSelect',
        component: () => import('@/views/example/vue-select'),
      },
    ],
  },
  {
    path: '/login',
    name: 'SmMgmtLogin',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/layout/SmMgmtLogin.vue'),
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
