<template>
  <modal
    :name="popupName"
    :draggable="draggable"
    :width="popupWidth"
    :height="popupHeight"
    :class="{ dragPopup: draggable }"
    :clickToClose="false"
    class="popup"
    @closed="handleClosed"
  >
    <div class="flex flex-col h-full">
      <!-- header -->
      <div class="popup__header">
        <div class="popup__header__title">
          {{ title }}
        </div>
        <button
          class="icon__popup-close"
          title="팝업닫기"
          @click="handleClosed"
        >
          <span class="hide"> 닫기 </span>
        </button>
      </div>
      <!-- content -->
      <div class="flex-1 popup__content">
        <slot></slot>
      </div>
      <!-- footer -->
      <div v-if="useFooter" class="popup__footer">
        <slot name="footer">
          <button
            v-if="useCancelButton"
            type="button"
            class="mr-2 btn btn__secondary-line"
            @click="cancel"
          >
            {{ cancelButtonText }}
          </button>
          <button
            v-if="useDeleteButton"
            type="button"
            class="mr-2 btn btn__secondary"
            @click="deleted"
          >
            {{ deleteButtonText }}
          </button>
          <button
            v-if="useModifyButton"
            type="button"
            class="mr-2 btn__primary"
            @click="modify"
          >
            {{ modifyButtonText }}
          </button>
          <button
            v-if="!useModifyButton"
            type="button"
            class="btn__primary"
            @click="confirm"
          >
            {{ okButtonText }}
          </button>
        </slot>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  props: {
    popupName: {
      type: [String],
      required: true,
    },
    title: {
      type: [String],
      required: false,
      default: '',
    },
    width: {
      type: [String],
      required: false,
      default: '1000',
    },
    height: {
      type: [String],
      required: false,
      default: '600',
    },
    draggable: {
      type: [Boolean, String],
      required: false,
      default: false,
    },
    useFooter: {
      type: [Boolean],
      required: false,
      default: true,
    },
    useCancelButton: {
      type: [Boolean],
      required: false,
      default: true,
    },
    useDeleteButton: {
      type: [Boolean],
      required: false,
      default: false,
    },
    useModifyButton: {
      type: [Boolean],
      required: false,
      default: false,
    },
    cancelButtonText: {
      type: [String],
      required: false,
      default: '취소',
    },
    deleteButtonText: {
      type: [String],
      required: false,
      default: '삭제',
    },
    modifyButtonText: {
      type: [String],
      required: false,
      default: '수정',
    },
    okButtonText: {
      type: [String],
      required: false,
      default: '확인',
    },
  },
  computed: {
    popupWidth() {
      return this.width
    },
    popupHeight() {
      return this.height
    },
  },
  methods: {
    handleClosed() {
      this.$emit('closed')
    },
    confirm() {
      this.$emit('confirm')
    },
    deleted() {
      this.$emit('deleted')
    },
    modify() {
      this.$emit('modify')
    },
    cancel() {
      this.hide()
      this.$emit('cancel')
    },
    hide() {
      this.$modal.hide(this.popupName)
    },
  },
}
</script>

<style lang="scss" scoped>
.popup {
  @apply flex flex-col h-full;
  .vm--overlay {
    opacity: 0.7;
  }
  &.vm--modal {
    @apply flex flex-col h-full;
    background: $white;
  }
  &__header {
    @apply flex flex-none items-center justify-between;
    padding: 16px 15px 15px 20px;
    border-bottom: 1px solid $gray-20;
    color: $gray-80;
    &__title {
      font-size: 18px;
      font-weight: 700;
      text-align: left;
    }
    .icon {
      &__popup-close {
        min-width: 17px;
        min-height: 17px;
        cursor: pointer;
        background: url('@/assets/img/icon__close.png') no-repeat center center /
          15px;
      }
    }
  }
  &__content {
    @apply flex-1 overflow-y-auto;
    padding: 25px 25px 10px;
  }
  &__footer {
    @apply flex-none;
    padding: 10px 15px 25px;
    text-align: center;
  }
}
</style>
