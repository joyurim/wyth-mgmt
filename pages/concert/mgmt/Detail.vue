<template>
  <section aria-label="콘서트 정보 등록 화면">
    {{pageTitle}}
    <div class="form__box">
      <!-- 콘서트 Id -->
      <article class="flex mb-2">
        <label
          class="form__label"
          :class="{ 'form__label--required': mode === 'create' }"
          >콘서트 ID</label
        >
        <div class="flex-1">
          <input
            type="text"
            class="form__input"
            placeholder="콘서트 ID를 입력해 주세요."
            :readonly="mode === 'read'"
            :disabled="mode === 'modify'"
          />
        </div>
      </article>
      <!-- 콘서트 명 -->
      <article class="flex">
        <label
          class="form__label"
          :class="{ 'form__label--required': mode === 'create' }"
          >콘서트 명</label
        >
        <div class="flex-1">
          <input
            type="text"
            class="form__input"
            placeholder="콘서트 명을 입력해 주세요."
            maxlength="30"
            :readonly="mode === 'read'"
            :disabled="mode === 'modify'"
          />
        </div>
      </article>
      <template v-if="mode !== 'create'">
        <div class="flex items-center mt-5">
          <div class="flex items-center flex-1 pr-8">
            <!-- 등록 정보 -->
            <label class="form__label">등록 정보</label>
            <div class="flex-1">
              <input
                type="text"
                class="form__input"
                :readonly="mode === 'read'"
                :disabled="mode === 'modify'"
              />
            </div>
          </div>
          <div class="flex flex-1 pl-8">
            <!-- 수정 정보 -->
            <label class="form__label">수정 정보</label>
            <div class="flex-1">
              <input
                type="text"
                class="form__input"
                :readonly="mode === 'read'"
                :disabled="mode === 'modify'"
              />
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="flex justify-between mb-8">
      <button class="btn__secondary-line--lg" @click="deleteDetail">
        삭제
      </button>
      <div class="">
        <button class="btn__primary-line--lg" @click="moveList">목록</button>
        <button class="btn__primary-line--lg" @click="moveCancel">취소</button>
        <button class="btn__primary--lg" @click="changeModifyMode">수정</button>
        <button class="btn__primary--lg" @click="saveDetail">저장</button>
      </div>
    </div>
  </section>
</template>

<script>
import pageMode from '../../../mixin/pageMode'
export default {
  name: 'ConcertMgmtDetail',
  mixins: [pageMode],
  data() {
    return{
      pageName: '콘서트 관리'
    }
  },
  mounted() {
  },
  methods: {
    deleteDetail() {
      // 삭제
    },
    moveList() {
      this.$router.push({name:'ConcertMgmt'})
      // 목록
    },
    moveCancel() {
      // 취소
    },
    changeModifyMode() {
      // 수정
      this.isModify = true
    },
    saveDetail() {
      // 저장
    },
  },
}
</script>

<style lang="scss" scoped></style>
