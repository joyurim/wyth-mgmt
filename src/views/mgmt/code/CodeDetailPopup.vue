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
    @modify="changeModifyMode"
    @closed="handleClosed"
  >
    <article class="form__box">
      <!-- 코드 -->
      <div class="flex items-center">
        <label
          class="form__label"
          :class="{
            'form__label--required': mode === 'create',
          }"
          >코드</label
        >
        <div class="flex-1">
          <input
            v-model="form.code"
            type="text"
            class="form__input"
            placeholder="코드 ID를 입력해 주세요."
            maxlength="30"
            :disabled="mode === 'modify'"
            :readonly="mode === 'read'"
          />
        </div>
      </div>
      <!-- 코드 명 -->
      <div class="flex items-center mt-2">
        <label
          class="form__label"
          :class="{
            'form__label--required': mode === 'create' || mode === 'modify',
          }"
          >코드 명</label
        >
        <div class="flex-1">
          <input
            v-model="form.code"
            type="text"
            class="form__input"
            placeholder="코드 ID를 입력해 주세요."
            maxlength="30"
            :readonly="mode === 'read'"
          />
        </div>
      </div>
      <!-- 코드 값 -->
      <div class="flex items-center mt-2">
        <label
          class="form__label"
          :class="{
            'form__label--required': mode === 'create' || mode === 'modify',
          }"
          >코드 값</label
        >
        <div class="flex-1">
          <input
            v-model="form.codeValue"
            type="text"
            class="form__input"
            placeholder="코드 값을 입력해 주세요."
            maxlength="30"
            :readonly="mode === 'read'"
          />
        </div>
      </div>
      <!-- 코드 설명 -->
      <div class="flex items-center mt-2">
        <label
          class="form__label"
          :class="{
            'form__label--required': mode === 'create' || mode === 'modify',
          }"
          >코드 설명</label
        >
        <div class="flex-1">
          <textarea
            v-model="form.codeDescription"
            class="form__textarea"
            placeholder="코드 설명을 입력해 주세요."
            maxlength="300"
            :readonly="mode === 'read'"
          />
        </div>
      </div>
      <!-- 코드 순서 -->
      <div class="flex items-center mt-2">
        <label
          class="form__label"
          :class="{
            'form__label--required': mode === 'create' || mode === 'modify',
          }"
          >코드 순서</label
        >
        <div class="flex-1">
          <input
            v-model="form.codeIndex"
            type="number"
            class="form__input"
            placeholder="코드 노출 순서를 입력해 주세요."
            :readonly="mode === 'read'"
          />
        </div>
      </div>
      <!-- 코드 변경 가능 여부 -->
      <div class="flex items-center mt-2">
        <label class="form__label"> 코드 변경 가능 여부 </label>
        <div class="flex items-center">
          <div class="form__radio">
            <input
              id="code-detail-codeYn-y"
              v-model="form.codeYn"
              type="radio"
              value="Y"
              :disabled="mode === 'read'"
              :class="{ 'radio--readonly': mode === 'read' }"
            />
            <label for="code-detail-codeYn-y">Yes</label>
          </div>
          <div class="form__radio mx-4">
            <input
              id="code-detail-codeYn-n"
              v-model="form.codeYn"
              type="radio"
              value="N"
              :disabled="mode === 'read'"
              :class="{ 'code--readonly': mode === 'read' }"
            />
            <label for="code-detail-codeYn-n">No</label>
          </div>
        </div>
      </div>
      <!-- 사용 여부 -->
      <div class="flex items-center mt-2">
        <label class="form__label"> 사용 여부 </label>
        <div class="flex items-center">
          <div class="form__radio">
            <input
              id="code-detail-useYn-y"
              v-model="form.useYn"
              type="radio"
              value="Y"
              :disabled="mode === 'read'"
              :class="{ 'radio--readonly': mode === 'read' }"
            />
            <label for="code-detail-useYn-y">Yes</label>
          </div>
          <div class="form__radio mx-4">
            <input
              id="code-detail-useYn-n"
              v-model="form.useYn"
              type="radio"
              value="N"
              :disabled="mode === 'read'"
              :class="{ 'code--readonly': mode === 'read' }"
            />
            <label for="code-detail-useYn-n">No</label>
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
  name: 'CodeDetailPopup',
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
        name: 'CodeDetailPopup',
        title: '코드 상세',
        width: '460',
        height: 'auto',
      },
      form: {
        code: '',
        codeName: '',
        codeValue: '',
        codeDescription: '',
        codeIndex: '',
        codeYn: 'Y',
        useYn: 'Y',
        rgstrInfo: '', // 등록정보
        mdfdInfo: '', // 수정정보
      },
    }
  },
  computed: {
    popupTitle() {
      if (this.mode === 'read') {
        // 조회모드
        return '코드 상세'
      } else if (this.mode === 'create') {
        // 등록 모드
        return '코드 등록'
      } else {
        // 수정모드
        return '코드 변경'
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

<style lang="scss" scoped>
.form__box {
  padding: 0 0 20px;
}
</style>
