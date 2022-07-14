<template>
  <div class="flex flex-start h-screen">
    <sidebar class="flex-none" />
    <section class="flex-1 flex flex-col layout">
      <div class="layout__top">
        <ul class="flex items-center breadcrumb">
          <li><router-link to="/">홈</router-link></li>
          <li><router-link to="/">콘서트</router-link></li>
          <li><router-link to="/">리스트</router-link></li>
        </ul>
        <div class="layout__name">
          <span class="point-color">홍길동</span>님 안녕하세요.
          <button type="button" class="btn__logout"></button>
        </div>
      </div>
      <router-view class="h-full" />
    </section>
  </div>
</template>

<script>
import sidebar from '../components/layout/sidebar'
export default {
  name: 'LayoutIndex',
  components: { sidebar },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped></style>
