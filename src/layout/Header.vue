<template>
  <header class="header" :class="{ 'header--active': headerStyle }">
    <h1 class="logo">
      <img src="/image/Abacus_CI.png" alt="logo" />
    </h1>
    <nav class="nav">
      <ul class="gnb flex items-center">
        <li v-for="gnb in gnbList" :key="gnb.menuId" class="gnb__list">
          <!-- 1뎁스 -->
          <div class="gnb__1depth" @click="activeMenu(gnb)">
            {{ gnb.menuName }}
          </div>
          <!-- 2뎁스 -->
          <div v-if="gnb.toggle" class="depth2 shadow__white1">
            <div class="depth2__inner">
              <div class="depth2__inner--title">
                {{ gnb.menuName }}
                <span class="icon--next" />
              </div>
              <ul
                class="flex-1 flex flex-wrap items-center"
                v-click-outside="close2depth"
              >
                <li
                  v-for="g in gnb.children"
                  :key="g.menuId"
                  @click="activeMenu(g)"
                >
                  {{ g.menuName }}
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
      <div class="util">
        <ul class="flex items-center">
          <li class="util__list">의사소통</li>
          <li class="util__list">알림센터</li>
          <li class="util__list">데이터사전</li>
          <li class="util__list">
            <span class="util--setting" />
            설정
          </li>
        </ul>
        <div class="util--search"></div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'LayoutHeader',
}
</script>
