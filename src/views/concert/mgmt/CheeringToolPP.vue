<template>
  <Popup
    :popup-name="popup.name"
    :title="popup.title"
    :width="popup.width"
    :height="popup.height"
    @confirm="confirmPopup"
    @cancel="cancelPopup"
    @closed="handleClosed"
  >
    <!-- 팝업 내용 -->
    모달 팝업 입니다
  </Popup>
</template>

<script>
import Popup from '@/components/common/PopupBasic'

export default {
  name: 'CheeringToolPP',
  components: {
    Popup,
  },
  data() {
    return {
      popup: {
        name: 'cheeringToolPopup',
        title: '응원도구 조회',
      },
    }
  },
  mounted() {
    this.open()
  },
  methods: {
    open() {
      this.$modal.show(this.popup.name)
    },
    handleClosed() {
      this.$emit('closePopup')
      this.$modal.hide(this.popup.name)
    },
    confirmPopup() {
      this.$toasted.show('확인되었습니다')
      this.handleClosed()
    },
    cancelPopup() {
      this.$toasted.show('취소되었습니다')
    },
  },
}
</script>

<style lang="scss" scoped></style>
