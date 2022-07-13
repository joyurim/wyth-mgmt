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
        <article class="flex items-center">
          <label class="form__label">콘서트 회차</label>
          <input
            v-model="roundInfo.round"
            type="text"
            readonly
            class="form__input form__input--100"
          />
        </article>
        <!-- 콘서트 일시 -->
        <article class="flex items-center mt-2">
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
        </article>
        <!-- 노출여부 -->
        <article class="flex items-center mt-2">
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
        </article>
        <!-- 좌석필드 선택 -->
        <article class="flex items-center mt-2">
          <label class="form__label">좌석필드 선택 </label>
          <div class="form__checkbox">
            <input
              id="seat-info-add-floor"
              v-model="roundInfo.checkbox.floor"
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
              v-model="roundInfo.checkbox.block"
              type="checkbox"
              true-value="Y"
              false-value="N"
            />
            <label for="seat-info-add-block">Block</label>
          </div>
          <div class="form__checkbox">
            <input
              id="seat-info-add-row"
              v-model="roundInfo.checkbox.row"
              type="checkbox"
              true-value="Y"
              false-value="N"
            />
            <label for="seat-info-add-row">Row</label>
          </div>
          <div class="form__checkbox">
            <input
              id="seat-info-add-col"
              v-model="roundInfo.checkbox.col"
              type="checkbox"
              true-value="Y"
              false-value="N"
            />
            <label for="seat-info-add-col">Col</label>
          </div>
        </article>
        <!-- Floor 필드명 -->
        <article class="flex items-center mt-2">
          <!-- Floor 필드명 -->
          <div class="flex flex-1 pr-8">
            <label class="form__label form__label--sm">Floor 필드명 </label>
            <input
              v-model="roundInfo.field.floorNm"
              type="text"
              class="form__input"
            />
          </div>
          <!-- Floor 필드 영문명 -->
          <div class="flex flex-1 pl-8">
            <label class="form__label form__label--sm">Floor 필드 영문명</label>
            <input
              v-model="roundInfo.field.floorNmEng"
              type="text"
              class="form__input"
            />
          </div>
        </article>
        <!-- Zone 필드명 -->
        <article class="flex items-center mt-2">
          <!-- Zone 필드명 -->
          <div class="flex flex-1 pr-8">
            <label class="form__label form__label--sm">Zone 필드명 </label>
            <input
              v-model="roundInfo.field.zoonNm"
              type="text"
              class="form__input"
            />
          </div>
          <!-- Zone 필드 영문명 -->
          <div class="flex flex-1 pl-8">
            <label class="form__label form__label--sm">Zone 필드 영문명</label>
            <input
              v-model="roundInfo.field.zoonNmEng"
              type="text"
              class="form__input"
            />
          </div>
        </article>
        <!-- Block 필드명 -->
        <article class="flex items-center mt-2">
          <!-- Block 필드명 -->
          <div class="flex flex-1 pr-8">
            <label class="form__label form__label--sm">Block 필드명 </label>
            <input
              v-model="roundInfo.field.blockNm"
              type="text"
              class="form__input"
            />
          </div>
          <!-- Block 필드 영문명 -->
          <div class="flex flex-1 pl-8">
            <label class="form__label form__label--sm">Block 필드 영문명</label>
            <input
              v-model="roundInfo.field.blockNmEng"
              type="text"
              class="form__input"
            />
          </div>
        </article>
        <!-- Row 필드명 -->
        <article class="flex items-center mt-2">
          <!-- Row 필드명 -->
          <div class="flex flex-1 pr-8">
            <label class="form__label form__label--sm">Row 필드명 </label>
            <input
              v-model="roundInfo.field.rowNm"
              type="text"
              class="form__input"
            />
          </div>
          <!-- Row 필드 영문명 -->
          <div class="flex flex-1 pl-8">
            <label class="form__label form__label--sm">Row 필드 영문명</label>
            <input
              v-model="roundInfo.field.rowNmEng"
              type="text"
              class="form__input"
            />
          </div>
        </article>
        <!-- Col 필드명 -->
        <article class="flex items-center mt-2">
          <!-- Col 필드명 -->
          <div class="flex flex-1 pr-8">
            <label class="form__label form__label--sm">Col 필드명 </label>
            <input
              v-model="roundInfo.field.colNm"
              type="text"
              class="form__input"
            />
          </div>
          <!-- Col 필드 영문명 -->
          <div class="flex flex-1 pl-8">
            <label class="form__label form__label--sm">Col 필드 영문명</label>
            <input
              v-model="roundInfo.field.colNmEng"
              type="text"
              class="form__input"
            />
          </div>
        </article>
      </div>
    </article>
    <!-- 좌석 등록 -->
    <article class="form__box flex items-center">
      <label class="form__label font-medium">좌석 등록</label>
      <div class="flex-1">
        <div class="flex itmes-center justify-between">
          <!-- 파일 업로드 -->
          <div class="flex-1 flex items-center">
            <div class="form__file--btn mr-4">
              <label for="fileUpdate">파일 업로드</label>
              <input
                type="file"
                id="fileUpdate"
                ref="fileUpdate"
                @change="uplodeFileName"
              />
            </div>
            <div
              v-for="(file, idx) in seatInfo.apndFiles"
              :key="`seat-info-file-${idx}`"
              class="form__file--update"
            >
              {{ file.name }}
            </div>
          </div>
          <div>
            <button class="btn__secondary-line" @click="sampleDownload">
              좌석등록 샘플 다운로드
            </button>
          </div>
        </div>
        <p class="form__infotext">
          &#8251; 파일 업로드는 CSV 파일만 가능합니다.<br />
          &#8251; 해당 공연일 좌석만 등록해주세요.
          <span class="point-color">
            &#8251; 샘플 파일을 다운로드 후 해당 포맷에 맞추어 일정별로 등록해
            주세요!<br />
            &#8251; 재등록 시 해당 일정에 등록된 좌석정보와 매칭정보는 모두
            초기화 됩니다.</span
          ><br />
          &#8251; 좌석 개수에 따라 최대 1~3분 정도 시간이 소요될 수 있습니다.<br />
          &#8251; 공연일 <span class="point-color">하루전</span>까지만 등록
          가능합니다.
        </p>
      </div>
    </article>
    <article class="w-full text-right mt-4">
      <button class="btn__primary-line--lg mr-1" @click="moveCancel">
        취소
      </button>
      <button class="btn__primary--lg" @click="saveDetail">저장</button>
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
        checkbox: {
          floor: '',
          zoon: '',
          block: '',
          row: '',
          col: '',
        },
        field: {
          floorNm: '',
          floorNmEng: '',
          zoonNm: '',
          zoonNmEng: '',
          blockNm: '',
          blockNmEng: '',
          rowNm: '',
          rowNmEng: '',
          colNm: '',
          colNmEng: '',
        },
      },
      seatInfo: {
        apndFiles: [], // 파일 업로드
      },
    }
  },
  methods: {
    disabledStartRange(date) {
      return date < new Date()
    },
    // 첨부파일
    uplodeFileName() {
      let file = this.$refs.fileUpdate.files[0]
      this.seatInfo.apndFiles.push(file)
    },
    sampleDownload() {
      // 좌석등록 샘플 다운로드
    },
    moveCancel() {
      // 취소
      this.$router.push({ name: 'SeatInfo' })
    },
    saveDetail() {
      // 저장
    },
  },
}
</script>

<style lang="scss" scoped>
.form__infotext {
  margin-top: 8px;
  padding: 10px;
  background: #f7f7fe;
  .point-color {
    font-size: 11px;
    font-weight: 500;
  }
}
</style>
