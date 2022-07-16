<template>
  <section aria-label="아티스트 상세 화면">
    <article class="form__box">
      <!-- 아티스트 Id -->
      <div class="flex items-center">
        <label class="form__label">아티스트 ID</label>
        <div class="flex-1">
          <input
            v-model="form.artistId"
            type="text"
            readonly
            class="form__input form__input--300"
          />
        </div>
      </div>
      <!-- 아티스트 명 -->
      <div class="flex items-center mt-2">
        <!-- 아티스트 명 -->
        <div class="flex flex-1 pr-8">
          <label class="form__label">아티스트 명</label>
          <div class="flex-1">
            <input
              v-model="form.artist"
              type="text"
              readonly
              class="form__input"
            />
          </div>
        </div>
        <!-- 아티스트 영문명 -->
        <div class="flex flex-1 pl-8">
          <label class="form__label">아티스트 영문명</label>
          <div class="flex-1">
            <input
              v-model="form.artistEngNm"
              type="text"
              readonly
              class="form__input"
            />
          </div>
        </div>
      </div>
      <!-- 아티스트 타입 -->
      <div class="flex items-center mt-2">
        <label class="form__label">아티스트 타입</label>
        <div class="form__radio">
          <input
            id="artist-typeYn-solo"
            v-model="form.artistType"
            type="radio"
            value="solo"
            disabled
            class="radio--readonly"
          />
          <label for="artist-typeYn-solo">솔로</label>
        </div>
        <div class="form__radio">
          <input
            id="artist-typeYn-group"
            v-model="form.artistType"
            type="radio"
            value="group"
            disabled
            class="radio--readonly"
          />
          <label for="artist-typeYn-group">그룹</label>
        </div>
      </div>
      <!-- 그룹멤버 -->
      <div class="flex items-center">
        <label class="form__label">그룹멤버</label>
        <div class="flex-1 flex flex-wrap">
          <div
            v-for="member in 5"
            :key="`artist-${member}`"
            class="flex items-center my-1"
          >
            <input
              v-model="form.memberId"
              type="text"
              readonly
              class="form__input form__input--100 mr-2"
            />
            <input
              v-model="form.memberNm"
              type="text"
              readonly
              class="form__input form__input--300"
            />
          </div>
        </div>
      </div>
      <!-- 데뷔일 -->
      <div class="flex items-center mt-2">
        <label class="form__label">데뷔일</label>
        <div class="flex-1">
          <input
            v-model="form.debutDate"
            type="text"
            readonly
            class="form__input form__input--300"
          />
        </div>
      </div>
      <!-- 노출여부 -->
      <div class="flex items-center mt-2">
        <label class="form__label">노출여부 </label>
        <div class="form__radio">
          <input
            id="concert-mgmt-exposureYn-n"
            v-model="form.exposureYn"
            type="radio"
            value="N"
            disabled
            class="radio--readonly"
          />
          <label for="concert-mgmt-exposureYn-n">비노출</label>
        </div>
        <div class="form__radio">
          <input
            id="concert-mgmt-exposureYn-y"
            v-model="form.exposureYn"
            type="radio"
            value="Y"
            disabled
            class="radio--readonly"
          />
          <label for="concert-mgmt-exposureYn-y">노출</label>
        </div>
      </div>
    </article>
    <article class="mt-4 text-right">
      <button
        v-if="mode !== 'create'"
        class="btn__primary-line--lg"
        @click="moveList"
      >
        목록
      </button>
    </article>
  </section>
</template>

<script>
export default {
  name: 'ArtistMgmtDetail',
  data() {
    return {
      form: {
        artistId: '33',
        artist: '레드벨벳',
        artistEngNm: 'RedVelvet',
        artistType: 'group',
        memberId: '',
        memberNm: '',
        debutDate: '2014-08-01',
        exposureYn: 'Y',
      },
    }
  },
  methods: {
    moveList() {
      this.$router.push({ name: 'ArtistMgmt' })
      // 목록
    },
  },
}
</script>

<style lang="scss" scoped></style>
