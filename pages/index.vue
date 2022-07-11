<template>
  <div>
    <layout-index/>
    <nuxt/>
  </div>
</template>

<script>
import LayoutIndex from "../components/layout/index"

export default {
  name: 'IndexPage',
  components: {LayoutIndex}
}
</script>
