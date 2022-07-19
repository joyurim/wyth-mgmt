<template>
  <Popup
    :popup-name="popup.name"
    :title="popup.title"
    :width="popup.width"
    :height="popup.height"
    @confirm="confirmPopup"
    @cancel="cancelPopup"
    @modify="changeModifyMode"
    @closed="handleClosed"
  >
  </Popup>
</template>

<script>
import Popup from '@/components/common/PopupBasic'

export default {
  name: 'CodeDetailPopup',
  components: { Popup },
  props: {},
  data() {
    return {
      isModify: false,
      popup: {
        name: 'CodeDetailPopup',
        title: '코드 상세',
        width: '460',
      },
    }
  },
  computed: {},
  mounted() {
    this.open()
  },
  methods: {
    changeModifyMode() {
      this.view = 'modify'
      this.isModify = true
    },
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
