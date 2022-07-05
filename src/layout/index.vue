<template>
  <div class="FrameworkWrap">
    <div class="flex-1 flex flex-col">
      <Header class="flex-none" />
      <div class="content">
        <div class="content__wrap">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header'

export default {
  name: 'LayoutIndex',
  components: {
    Header,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped></style>
