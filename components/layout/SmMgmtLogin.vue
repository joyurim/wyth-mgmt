<template>
  <div class="Login">
    <div class="login-box">
      <!-- 타이틀 -->
      <h1 class="login-title">
        <img src="@/assets/img/logo.png" alt="SM Ent 관리자" />
      </h1>
      <!-- 로그인 -->
      <div class="mt-12">
        <!-- id -->
        <div class="flex items-center mb-4">
          <label class="form__label">아이디</label>
          <div class="flex-1">
            <input
              ref="id"
              v-model="form.id"
              type="text"
              class="form__input"
              placeholder="아이디를 입력해 주세요."
              @keyup.enter="login"
            />
            <p v-if="view.errorMsg.id" class="form__error">
              아이디를 입력해 주세요.
            </p>
          </div>
        </div>
        <!-- Password -->
        <div class="flex items-center mb-4">
          <label class="form__label">비밀번호</label>
          <div class="flex-1">
            <input
              ref="password"
              v-model="form.password"
              type="password"
              class="form__input"
              placeholder="비밀번호를 입력해 주세요."
              @keyup.enter="login"
            />
            <p v-if="view.errorMsg.password" class="form__error">
              비밀번호를 입력해 주세요.
            </p>
          </div>
        </div>
        <!-- 로그인 버튼 -->
        <button class="w-full btn__primary--lg" @click="login">로그인</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmMgmtLogin',
  data() {
    return {
      form: {
        id: '',
        password: '',
      },
      view: {
        errorMsg: {
          id: '',
          password: '',
        },
      },
    }
  },
  methods: {
    login() {
      // 로그인
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/login';
</style>
