<template>
  <div class="flex flex-start h-screen">
    <layout-sidebar/>
    <section class="flex-1 flex flex-col layout">
      <div class="layout__top">
        <ul class="flex items-center breadcrumb">
          <li><nuxt-link to="/">홈</nuxt-link></li>
          <li><nuxt-link to="/">콘서트</nuxt-link></li>
          <li><nuxt-link to="/">리스트</nuxt-link></li>
        </ul>
        <div>
          <span class="point-color">홍길동</span>님 안녕하세요.
          <button type="button" class="btn__logout"></button>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped></style>
