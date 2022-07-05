<template>
  <div class="flex flex-start h-screen">
    <sidebar class="flex-none" />
    <section class="flex-1 flex flex-col layout">
      <p class="user"><span class="point-color">홍길동</span>님 안녕하세요.</p>
      <router-view />
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
