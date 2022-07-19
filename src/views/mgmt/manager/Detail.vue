<template>
  <section aria-label="관리자 상세">
    <article class="form__box">
      <div class="flex items-center">
        <!-- Id -->
        <div class="flex flex-1 pr-8">
          <label class="form__label">ID</label>
          <div class="flex-1">
            <input
              v-model="form.id"
              type="text"
              readonly
              maxlength="20"
              placeholder="대소문자 구분 없이 영문 숫자를 입력해 주세요!"
              class="form__input"
            />
          </div>
        </div>
        <!-- password -->
        <div class="flex flex-1 pl-8">
          <label class="form__label">비밀번호</label>
          <div class="flex-1">
            <input
              v-model="form.pw"
              type="password"
              readonly
              maxlength="20"
              placeholder="비밀번호를 입력해 주세요!"
              class="form__input"
            />
          </div>
        </div>
      </div>
      <div class="flex items-center mt-2">
        <!-- 이름 -->
        <div class="flex flex-1 pr-8">
          <label class="form__label">이름</label>
          <div class="flex-1">
            <input
              v-model="form.name"
              type="text"
              readonly
              maxlength="20"
              placeholder="이름을 입력해 주세요!"
              class="form__input"
            />
          </div>
        </div>
        <!-- 관리자 레벨 -->
        <div class="flex flex-1 pl-8">
          <label class="form__label">관리자 레벨</label>
          <div class="flex-1">
            <v-select
              v-model="form.level"
              :options="form.levelList"
              label="name"
              :searchable="false"
              :readonly="mode === 'read'"
              :class="{
                ['select--readonly']: mode === 'read',
              }"
            />
          </div>
        </div>
      </div>
      <!-- 노출여부 -->
      <div class="flex items-center mt-2">
        <label class="form__label">노출여부 </label>
        <div class="form__radio">
          <input
            id="mgmt-useYn-n"
            v-model="form.useYn"
            type="radio"
            value="N"
            :disabled="mode === 'read'"
            :class="{ 'radio--readonly': mode === 'read' }"
          />
          <label for="mgmt-useYn-n">비노출</label>
        </div>
        <div class="form__radio">
          <input
            id="mgmt-useYn-y"
            v-model="form.useYn"
            type="radio"
            value="Y"
            :disabled="mode === 'read'"
            :class="{ 'radio--readonly': mode === 'read' }"
          />
          <label for="mgmt-useYn-y">노출</label>
        </div>
      </div>
    </article>
    <!-- 버튼 영역 -->
    <article class="w-full text-right mt-4">
      <button
        v-if="mode !== 'create'"
        class="btn__primary-line--lg mr-1"
        @click="moveList"
      >
        목록
      </button>
      <button
        v-if="mode === 'create'"
        class="btn__primary-line--lg mr-1"
        @click="moveCancel"
      >
        취소
      </button>
      <button
        v-if="mode === 'read'"
        class="btn__primary--lg"
        @click="changeModifyMode"
      >
        수정
      </button>
      <button
        v-if="mode !== 'read'"
        class="btn__primary--lg"
        @click="saveDetail"
      >
        저장
      </button>
    </article>
  </section>
</template>

<script>
import pageMode from '@/mixin/pageMode'

export default {
  name: 'ManagerMgmtDetail',
  mixins: [pageMode],
  data() {
    return {
      form: {
        id: '',
        pw: '',
        name: '',
        level: '',
        levelList: ['총 관리자(10)', '일반 관리자(1)'],
        useYn: 'Y',
      },
    }
  },
  methods: {
    moveList() {
      this.$router.push({ name: 'ManagerMgmt' })
      // 목록
    },
    moveCancel() {
      // 취소
      this.$router.push({ name: 'ManagerMgmt' })
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
