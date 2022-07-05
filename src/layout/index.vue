<template>
  <div class="flex flex-start h-sereen">
    <sidebar />
    <section class="">
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
