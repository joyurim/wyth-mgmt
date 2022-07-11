<template>
  <section aria-label="콘서트 정보 등록 화면">
    {{ pageTitle }}
    <div class="form__box">
      <!-- id -->
      <div class="flex items-center">
        <!-- 콘서트 Id -->
        <article class="flex flex-1 pr-2">
          <label class="form__label">콘서트 ID</label>
          <div class="flex-1">
            <input
              v-model="form.id"
              type="text"
              readonly
              placeholder="등록 후 자동 생성됩니다."
              class="form__input"
            />
          </div>
        </article>
        <!-- 콘서트 관리 Id -->
        <article class="flex flex-1 pl-2">
          <label class="form__label">콘서트 관리 ID</label>
          <div class="flex-1">
            <input
              v-model="form.mgmtId"
              type="text"
              maxlength="50"
              placeholder="콘서트 관리 ID를 입력해 주세요!"
              class="form__input"
            />
          </div>
        </article>
      </div>
      <!-- 콘서트 명 -->
      <article class="flex flex-col mt-2">
        <!-- 콘서트명 -->
        <div class="flex items-center">
          <label
            class="form__label"
            :class="{
              'form__label--required': mode === 'create' || mode === 'modify',
            }"
            >콘서트 명</label
          >
          <div class="flex-1">
            <input
              v-model="form.concertNm"
              type="text"
              class="form__input"
              maxlength="50"
              :readonly="mode === 'read'"
            />
          </div>
        </div>
        <!-- 콘서트 영문명 -->
        <div class="flex items-center mt-2">
          <label class="form__label">콘서트 영문명</label>
          <div class="flex-1">
            <input
              v-model="form.concertEngNm"
              type="text"
              class="form__input"
              maxlength="50"
              :readonly="mode === 'read'"
            />
          </div>
        </div>
      </article>
      <!-- 아티스트 명  -->
      <article class="flex items-center">
        <label
          class="form__label mt-2"
          :class="{
            'form__label--required': mode === 'create' || mode === 'modify',
          }"
          >아티스트 명
        </label>
        <div class="flex-1 flex-col">
          <div
            v-for="(item, i) in form.artistList"
            :key="i"
            class="flex items-center mt-2"
          >
            <input
              v-model="form.artist"
              type="text"
              :readonly="mode === 'read' || mode === 'modify'"
              class="form__input form__input--300"
            />
            <span class="ml-8 mr-2">(영문명)</span>
            <input
              v-model="form.artistEngNm"
              type="text"
              :readonly="mode === 'read' || mode === 'modify'"
              class="form__input form__input--300"
            />
            <div v-if="mode === 'create'" class="ml-2">
              <button class="btn__secondary">검색</button>
              <button class="btn__secondary-line mx-2">초기화</button>
              <button class="btn__primary-line">추가</button>
            </div>
          </div>
        </div>
      </article>
      <!-- 콘서트 기간  -->
      <article class="flex items-center mt-2">
        <label
          class="form__label mt-2"
          :class="{
            'form__label--required': mode === 'create' || mode === 'modify',
          }"
          >콘서트 기간
        </label>
        <div class="flex-1 flex items-center">
          <date-picker
            v-model="form.startDate"
            value-type="format"
            :lang="form.lang"
            :clearable="false"
            :disabled-date="disabledStartRange"
            :readonly="mode === 'read'"
            :class="{
              ['mx-datepicker--readonly']: mode === 'read',
            }"
          />
          <span class="mx-2">-</span>
          <date-picker
            v-model="form.endDate"
            :lang="form.lang"
            value-type="format"
            :clearable="false"
            :disabled-date="disabledEndRange"
            :readonly="mode === 'read'"
            :class="{
              ['mx-datepicker--readonly']: mode === 'read',
            }"
          />
        </div>
      </article>
      <!-- 콘서트 회차  -->
      <article class="flex items-center">
        <label
          class="form__label mt-2"
          :class="{
            'form__label--required': mode === 'create' || mode === 'modify',
          }"
          >콘서트 회차
        </label>
        <div class="flex-1 flex-col">
          <div
            v-for="(item, i) in form.roundList"
            :key="i"
            class="flex items-center mt-2"
          >
            <span class="mr-2">{{ i + 1 }}회차</span>
            <date-picker
              v-model="form.roundDate"
              value-type="format"
              :lang="form.lang"
              :clearable="false"
              :disabled-date="disabledStartRange"
              :readonly="mode === 'read'"
              :class="{
                ['mx-datepicker--readonly']: mode === 'read',
              }"
              class="mr-1"
            />
            <div class="w-28 mr-1">
              <v-select
                v-model="form.hour"
                :options="form.hourList"
                label="name"
                :searchable="false"
                :readonly="mode === 'read'"
                :class="{
                  ['select--readonly']: mode === 'read',
                }"
              />
            </div>
            <div class="w-28 mr-2">
              <v-select
                v-model="form.minute"
                :options="form.minuteList"
                label="name"
                :searchable="false"
                :readonly="mode === 'read'"
                :class="{
                  ['select--readonly']: mode === 'read',
                }"
              />
            </div>
            <template v-if="!mode === 'read'">
              <div v-if="i === 0">
                <button class="btn__secondary-line mr-2">전체 삭제</button>
                <button class="btn__primary-line">회차 추가</button>
              </div>
              <button v-if="item.addFlag" class="btn__secondary-line">
                삭제
              </button>
            </template>
          </div>
        </div>
      </article>
      <!-- 공연장 명 -->
      <article class="flex flex-col mt-2">
        <!-- 공연장 명 -->
        <div class="flex items-center">
          <label
            class="form__label"
            :class="{
              'form__label--required': mode === 'create' || mode === 'modify',
            }"
            >공연장 명</label
          >
          <div class="flex-1">
            <input
              v-model="form.concertHall"
              type="text"
              class="form__input"
              maxlength="50"
              :readonly="mode === 'read'"
            />
          </div>
        </div>
        <!-- 공연장 영문명 -->
        <div class="flex items-center mt-2">
          <label class="form__label">공연장 영문명</label>
          <div class="flex-1">
            <input
              v-model="form.concertHallEng"
              type="text"
              class="form__input"
              maxlength="50"
              :readonly="mode === 'read'"
            />
          </div>
        </div>
      </article>
      <!-- 노출여부 -->
      <article class="flex items-center">
        <label class="form__label mt-2">노출여부 </label>
        <div class="form__radio">
          <input
            id="concert-mgmt-exposureYn-n"
            v-model="form.exposureYn"
            type="radio"
            value="N"
            :disabled="mode === 'read'"
            :class="{ 'radio--readonly': mode === 'read' }"
          />
          <label for="concert-mgmt-exposureYn-n">비노출</label>
        </div>
        <div class="form__radio">
          <input
            id="concert-mgmt-exposureYn-y"
            v-model="form.exposureYn"
            type="radio"
            value="Y"
            :disabled="mode === 'read'"
            :class="{ 'radio--readonly': mode === 'read' }"
          />
          <label for="concert-mgmt-exposureYn-y">노출</label>
        </div>
      </article>
      <!-- 아티스트 명  -->
      <article class="flex items-center">
        <label
          class="form__label mt-2"
          :class="{
            'form__label--required': mode === 'create' || mode === 'modify',
          }"
          >응원도구 이름
        </label>
        <div class="flex-1 flex-col">
          <div
            v-for="(item, i) in form.cheeringToolList"
            :key="i"
            class="flex items-center mt-2"
          >
            <input
              v-model="form.cheeringTool"
              type="text"
              :readonly="mode === 'read'"
              class="form__input form__input--300"
            />
            <div v-if="mode === 'create' || mode === 'modify'" class="ml-2">
              <button class="btn__secondary">검색</button>
              <button class="btn__secondary-line mx-2">초기화</button>
              <button class="btn__primary-line">추가</button>
            </div>
          </div>
        </div>
      </article>
      <!-- 등록/수정 정보 -->
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
    <!-- 버튼 영역 -->
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
import pageMode from '@/mixin/pageMode'
export default {
  name: 'ConcertMgmtDetail',
  mixins: [pageMode],
  data() {
    return {
      pageName: '콘서트 관리',
      form: {
        id: '',
        mgmtId: '',
        concertNm: '',
        concertEngNm: '',
        artistList: [
          {
            artist: '',
            artistEngNm: '',
          },
        ],
        startDate: '',
        endDate: '',
        lang: {
          days: ['일', '월', '화', '수', '목', '금', '토'],
          yearFormat: 'YYYY년',
          formatLocale: {
            firstDayOfWeek: 0,
          },
        },
        roundList: [
          {
            roundDate: '',
            hour: '',
            minute: '',
          },
          {
            roundDate: '',
            hour: '',
            minute: '',
            addFlag: true,
          },
          {
            roundDate: '',
            hour: '',
            minute: '',
            addFlag: true,
          },
        ],
        hourList: [
          '00',
          '01',
          '02',
          '03',
          '04',
          '05',
          '06',
          '07',
          '08',
          '09',
          '10',
          '11',
          '12',
          '13',
          '14',
          '15',
          '16',
          '17',
          '18',
          '19',
          '20',
          '21',
          '22',
          '23',
          '24',
        ],
        minuteList: ['00', '30'],
        concertHall: '',
        concertHallEng: '',
        exposureYn: 'N',
        cheeringToolList: [
          {
            cheeringTool: '',
          },
        ],
      },
    }
  },
  mounted() {},
  methods: {
    deleteDetail() {
      // 삭제
    },
    moveList() {
      this.$router.push({ name: 'ConcertMgmt' })
      // 목록
    },
    moveCancel() {
      // 취소
      this.$router.push({ name: 'ConcertMgmt' })
    },
    changeModifyMode() {
      // 수정
      this.isModify = true
    },
    saveDetail() {
      // 저장
    },
    /* ===== 콘서트 기간 ===== */
    disabledStartRange(date) {
      // 시작일 선택값 변경
      return date < new Date()
    },
    disabledEndRange(date) {
      // 종료일 선택값 변경
      return date < new Date()
    },
  },
}
</script>

<style lang="scss" scoped></style>
