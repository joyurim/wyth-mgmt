<template>
  <nav class="flex flex-col sidebar">
    <h1 class="logo mb-8">
      <router-link to="/concert/concert-mgmt">
        <img src="@/assets/img/logo.png" alt="SM Ent 관리자" />
      </router-link>
    </h1>
    <ul class="sidebar__wrap">
      <li
        v-for="(mainMenu, index) in menuList"
        :key="`sidebar-main-menu-${mainMenu.menuId}-${index}`"
        class="mb-8"
      >
        <h2>{{ mainMenu.menuTitle }}</h2>
        <ul v-if="mainMenu.subMenuList && mainMenu.subMenuList.length">
          <li
            v-for="subMenu in mainMenu.subMenuList"
            :key="`sidebar-sub-menu-${subMenu.menuId}`"
            class="submenu"
          >
            <router-link :to="subMenu.menuUrl" class="menu">
              {{ subMenu.menuName }}</router-link
            >
          </li>
        </ul>
      </li>
    </ul>
    <p class="logout"><i class="triangle" />Logout</p>
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
  width: 220px;
  height: 100%;
  padding: 30px 20px 40px;
  background: $primary-3;
  color: $white;
  &__wrap {
    overflow-y: auto;
    h2 {
      padding: 4px 0;
      font-weight: 700;
      font-size: 13px;
    }
    .submenu {
      margin-left: 2px;
      .menu {
        display: block;
        padding-left: 8px;
        border-left: 1px solid $primary-4;
      }
      &:hover {
        .menu {
          border-left-color: $primary-2;
          color: $primary-2;
        }
      }
      .router-link-exact-active {
        color: $primary-1;
        font-weight: 500;
      }
    }
  }
  .logout {
    color: $primary-2;
    cursor: pointer;
    .triangle {
      display: inline-block;
      width: 0px;
      height: 0px;
      margin-right: 2px;
      border-top: 6px solid $primary-2;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      transform: rotate(270deg);
      vertical-align: middle;
    }
  }
}
</style>
