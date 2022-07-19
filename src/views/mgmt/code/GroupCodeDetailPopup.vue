<template>
  <Popup
    :popup-name="popup.name"
    :title="popupTitle"
    :width="popup.width"
    :height="popup.height"
    :use-modify-button="mode === 'read' && !isModify"
    :use-delete-button="mode !== 'create'"
    @confirm="confirmPopup"
    @cancel="cancelPopup"
    @closed="handleClosed"
  >
    <article class="form__box">
      <!-- 그룹코드 -->
      <div class="flex items-center">
        <label class="form__label">그룹 코드</label>
        <div class="flex-1">
          <input
            v-model="form.codeGroup"
            type="text"
            maxlength="30"
            placeholder="그룹 코드를 입력해주세요."
            class="form__input"
            :disabled="mode === 'modify'"
            :readonly="mode === 'read'"
          />
        </div>
      </div>
      <!-- 그룹코드 명 -->
      <div class="flex items-center mt-2">
        <label class="form__label">그룹 코드 명</label>
        <div class="flex-1">
          <input
            v-model="form.codeGroupName"
            type="text"
            maxlength="30"
            placeholder="그룹 코드 명을 입력해 주세요."
            class="form__input"
            :readonly="mode === 'read'"
          />
        </div>
      </div>
      <!-- 그룹코드 설명 -->
      <div class="flex items-center mt-2">
        <label class="form__label">그룹 코드 설명</label>
        <div class="flex-1">
          <textarea
            v-model="form.codeGroupDescription"
            class="form__textarea"
            placeholder="그룹 코드 설명을 입력해 주세요."
            maxlength="300"
            :readonly="mode === 'read'"
          />
        </div>
      </div>
      <!-- 사용 여부 -->
      <div class="mb-5 flex items-center">
        <label class="form__label"> 사용 여부 </label>
        <div class="flex items-center">
          <div class="form__radio">
            <input
              id="groupCode-detail-useYn-y"
              v-model="form.useYn"
              type="radio"
              value="Y"
              :disabled="mode === 'read'"
              :class="{ 'radio--readonly': mode === 'read' }"
            />
            <label for="groupCode-detail-useYn-y">Yes</label>
          </div>
          <div class="form__radio mx-4">
            <input
              id="groupCode-detail-useYn-n"
              v-model="form.useYn"
              type="radio"
              value="N"
              :disabled="mode === 'read'"
              :class="{ 'groupCode--readonly': mode === 'read' }"
            />
            <label for="groupCode-detail-useYn-n">No</label>
          </div>
        </div>
      </div>
      <template v-if="mode === 'read' || mode === 'modify'">
        <!-- 등록정보 -->
        <div class="mb-5 flex items-center">
          <label class="form__label"> 등록 정보 </label>
          <div class="flex-1">
            <input
              v-model="form.rgstrInfo"
              type="text"
              class="form__input"
              readonly
            />
          </div>
        </div>
        <!-- 수정정보 -->
        <div class="mb-5 flex items-center">
          <label class="form__label"> 수정 정보 </label>
          <div class="flex-1">
            <input
              v-model="form.mdfdInfo"
              type="text"
              class="form__input"
              readonly
            />
          </div>
        </div>
      </template>
    </article>
  </Popup>
</template>

<script>
import Popup from '@/components/common/PopupBasic'

export default {
  name: 'GroupCodeDetailPopup',
  components: { Popup },
  props: {
    mode: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isModify: false,
      popup: {
        name: 'GroupCodeDetailPopup',
        width: '460',
        height: 'auto',
      },
      form: {
        codeGroup: '',
        codeGroupName: '',
        codeGroupDescription: '',
        useYn: '',
        rgstrInfo: '',
        mdfdInfo: '',
      },
    }
  },
  computed: {
    popupTitle() {
      if (this.mode === 'read') {
        return '그룹코드 상세'
      } else if (this.mode === 'create') {
        // 등록 모드
        this.resetForm()
        return '그룹코드 등록'
      } else {
        // 수정모드
        return '그룹코드 변경'
      }
    },
  },
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
