<template>
  <section aria-label="응원정보 상세 화면">
    {{ pageTitle }}
    응원정보 상세
  </section>
</template>

<script>
import pageMode from '@/mixin/pageMode'
export default {
  name: 'CheeringToolDetail',
  mixins: [pageMode],
}
</script>

<style lang="scss" scoped></style>
