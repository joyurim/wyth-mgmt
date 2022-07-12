<template>
  <section aria-label="좌석 관리 등록 화면">
    <!-- 콘서트 정보 -->
    <article class="form__box flex items-center">
      <label class="form__label font-medium">콘서트 정보</label>
      <div class="flex-1">
        <div class="flex items-center">
          <!-- 콘서트 ID -->
          <div class="flex-1 flex items-center pr-8">
            <label class="form__label">콘서트 ID</label>
            <input
              v-model="concertInfo.id"
              type="text"
              readonly
              class="form__input"
            />
          </div>
          <!-- 콘서트 노출여부 -->
          <div class="flex-1 flex items-center pl-8">
            <label class="form__label">콘서트 노출여부</label>
            <input
              v-model="concertInfo.exposureYn"
              type="text"
              readonly
              class="form__input"
            />
          </div>
        </div>
        <div class="flex items-center mt-2">
          <!-- 콘서트 명 -->
          <div class="flex-1 flex items-center pr-8">
            <label class="form__label">콘서트 명 </label>
            <input
              v-model="concertInfo.name"
              type="text"
              readonly
              class="form__input"
            />
          </div>
          <!-- 공연장 -->
          <div class="flex-1 flex items-center pl-8">
            <label class="form__label">공연장</label>
            <input
              v-model="concertInfo.hall"
              type="text"
              readonly
              class="form__input"
            />
          </div>
        </div>
      </div>
    </article>
    <!-- 콘서트 회차 정보 -->
    <article class="form__box flex items-center">
      <label class="form__label font-medium">콘서트 회차 정보</label>
      <div class="flex-1">
        <!-- 콘서트 회차 -->
        <div class="flex items-center">
          <label class="form__label">콘서트 회차</label>
          <input
            v-model="roundInfo.round"
            type="text"
            readonly
            class="form__input form__input--100"
          />
        </div>
        <!-- 콘서트 일시 -->
        <div class="flex items-center mt-2">
          <label class="form__label">콘서트 일시</label>
          <div class="flex-1 flex items-center">
            <date-picker
              v-model="roundInfo.roundDate"
              value-type="format"
              :lang="roundInfo.lang"
              :clearable="false"
              :disabled-date="disabledStartRange"
              class="mr-1"
            />
            <div class="w-28 mr-1">
              <v-select
                v-model="roundInfo.hour"
                :options="roundInfo.hourList"
                label="name"
                :searchable="false"
              />
            </div>
            <div class="w-28">
              <v-select
                v-model="roundInfo.minute"
                :options="roundInfo.minuteList"
                label="name"
                :searchable="false"
              />
            </div>
          </div>
        </div>
        <!-- 노출여부 -->
        <div class="flex items-center mt-2">
          <label class="form__label">노출여부 </label>
          <div class="form__radio">
            <input
              id="seat-info-add-exposureYn-n"
              v-model="roundInfo.exposureYn"
              type="radio"
              value="N"
            />
            <label for="seat-info-add-exposureYn-n">비노출</label>
          </div>
          <div class="form__radio">
            <input
              id="seat-info-add-exposureYn-y"
              v-model="roundInfo.exposureYn"
              type="radio"
              value="Y"
            />
            <label for="seat-info-add-exposureYn-y">노출</label>
          </div>
        </div>
        <!-- 좌석필드 선택 -->
        <div class="flex items-center mt-2">
          <label class="form__label">좌석필드 선택 </label>
          <div class="form__checkbox">
            <input
              id="seat-info-add-floor"
              v-model="roundInfo.floor"
              type="checkbox"
              true-value="Y"
              false-value="N"
            />
            <label for="seat-info-add-floor">Floor</label>
          </div>
          <div class="form__checkbox">
            <input
              id="seat-info-add-zoon"
              v-model="roundInfo.zoon"
              type="checkbox"
              true-value="Y"
              false-value="N"
            />
            <label for="seat-info-add-zoon">Zoon</label>
          </div>
          <div class="form__checkbox">
            <input
              id="seat-info-add-block"
              v-model="roundInfo.block"
              type="checkbox"
              true-value="Y"
              false-value="N"
            />
            <label for="seat-info-add-block">Block</label>
          </div>
          <div class="form__checkbox">
            <input
              id="seat-info-add-row"
              v-model="roundInfo.row"
              type="checkbox"
              true-value="Y"
              false-value="N"
            />
            <label for="seat-info-add-row">Row</label>
          </div>
          <div class="form__checkbox">
            <input
              id="seat-info-add-col"
              v-model="roundInfo.col"
              type="checkbox"
              true-value="Y"
              false-value="N"
            />
            <label for="seat-info-add-col">Col</label>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'SeatInfoAdd',
  data() {
    return {
      concertInfo: {
        id: '',
        exposureYn: '',
        name: '',
        hall: '',
      },
      roundInfo: {
        round: '',
        roundDate: '',
        hour: '',
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
        minute: '',
        minuteList: ['00', '30'],
        exposureYn: 'N',
        floor: '',
        zoon: '',
        block: '',
        row: '',
        col: '',
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
