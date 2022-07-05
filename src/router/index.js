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
        // 좌석 정보
        path: '/concert/seat-info',
        name: 'SeatInfo',
        component: () =>
          import(/* webpackChunkName: "concert" */ '@/views/concert/seat-info'),
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
        // 응원도구 관리
        path: '/basic-info/cheering-tool',
        name: 'CheeringTtoolMgmt',
        component: () =>
          import(
            /* webpackChunkName: "basic-info" */ '@/views/basic-info/cheering-tool'
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
    ],
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
