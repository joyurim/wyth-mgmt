<template>
  <nav class="flex flex-col sidebar">
    <ul class="">
      <li
        v-for="(mainMenu, index) in menuList"
        :key="`sidebar-main-menu-${mainMenu.menuId}-${index}`"
        class="sidebar__menu"
      >
        <h2>{{ mainMenu.menuTitle }}</h2>
        <ul v-if="mainMenu.subMenuList && mainMenu.subMenuList.length">
          <li
            v-for="subMenu in mainMenu.subMenuList"
            :key="`sidebar-sub-menu-${subMenu.menuId}`"
            class="submenu"
          >
            <router-link :to="subMenu.menuUrl">
              {{ subMenu.menuName }}</router-link
            >
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'SidebarIndex',
  data() {
    return {
      menuList: [
        {
          menuId: 'menu1',
          menuTitle: '콘서트',
          subMenuList: [
            {
              menuId: 'menu1-1',
              menuName: '콘서트 관리',
              menuUrl: '/concert/concert-mgmt',
            },
            {
              menuId: 'menu1-2',
              menuName: '좌석 정보',
              menuUrl: '/concert/seat-info',
            },
          ],
        },
        {
          menuId: 'menu2',
          menuTitle: '기본정보 관리',
          subMenuList: [
            {
              menuId: 'menu2-1',
              menuName: '아티스트 관리',
              menuUrl: '/basic-info/artist',
            },
            {
              menuId: 'menu2-2',
              menuName: '응원도구 관리',
              menuUrl: '/basic-info/cheering-tool',
            },
          ],
        },
        {
          menuId: 'menu3',
          menuTitle: '통계 관리',
          subMenuList: [
            {
              menuId: 'menu3-1',
              menuName: '공연별 통계',
              menuUrl: '/statistics/show',
            },
            {
              menuId: 'menu3-2',
              menuName: '펌웨어 업데이트',
              menuUrl: '/statistics/firmware',
            },
          ],
        },
        {
          menuId: 'menu4',
          menuTitle: '관리',
          subMenuList: [
            {
              menuId: 'menu4-1',
              menuName: '관리자 관리',
              menuUrl: '/mgmt/manager',
            },
            {
              menuId: 'menu4-2',
              menuName: '코드 관리',
              menuUrl: '/mgmt/code',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.sidebar {
  overflow-y: auto;
  width: 220px;
  height: 100vh;
  padding: 33px 20px 40px;
  background: #484d5b;
  color: $white;
}
</style>
