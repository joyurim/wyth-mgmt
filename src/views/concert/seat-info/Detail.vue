<template>
  <section aria-label="좌석 관리 상세 화면">
    {{ pageTitle }}
  </section>
</template>

<script>
import pageMode from '@/mixin/pageMode'
export default {
  name: 'SeatInfoDetail',
  mixins: [pageMode],
}
</script>

<style lang="scss" scoped></style>
