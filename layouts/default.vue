<template>
  <div class="flex flex-start h-screen">
    <sidebar class="flex-none" />
    <section class="flex-1 flex flex-col layout">
      <div class="layout__top">
        <ul class="flex items-center breadcrumb">
          <li><NuxtLink to="/">홈</NuxtLink></li>
          <li><NuxtLink to="/">콘서트</NuxtLink></li>
          <li><NuxtLink to="/">리스트</NuxtLink></li>
        </ul>
        <div class="layout__name">
          <span class="point-color">홍길동</span>님 안녕하세요.
          <button type="button" class="btn__logout"></button>
        </div>
      </div>
      <nuxt class="h-full"/>
    </section>
  </div>
</template>

<script>
import sidebar from "../components/layout/sidebar";

export default {
  name: "default",
  components: {sidebar}
}
</script>

<style scoped>

</style>
