<template>
  <section aria-label="좌석 관리 조회 화면">
    <article aria-label="검색 영역" class="search-form">
      <!-- 공연,아티스트 선택 -->
      <div class="w-28 mr-1">
        <v-select
          v-model="search.searchType"
          :options="search.searchTypeList"
          label="name"
          :searchable="false"
        />
      </div>
      <!-- 콘서트명 -->
      <div class="mr-1">
        <input
          v-model="search.concertNm"
          type="text"
          :placeholder="concertNmPla"
          :readonly="search.searchType.name === '전체'"
          class="form__input"
        />
      </div>
      <!-- 노출여부 -->
      <div class="flex items-center mr-4">
        <label class="search-form__label">노출여부</label>
        <div class="w-24">
          <v-select
            v-model="search.exposureYn"
            :options="search.exposureYnList"
            label="name"
            :searchable="false"
          />
        </div>
      </div>
      <!-- 기간검색 -->
      <!-- TODO : select에서 기간검색(직접입력) 선택 시 데이터피커 활성화) -->
      <div class="flex items-center">
        <label class="search-form__label">기간검색</label>
        <div class="w-28 mr-1">
          <v-select
            v-model="search.date"
            :options="search.dateList"
            label="name"
            :searchable="false"
          />
        </div>
        <date-picker
          v-model="search.startDate"
          value-type="format"
          :lang="search.lang"
          :clearable="false"
          :disabled-date="disabledStartRange"
          disabled
        />
        <span class="mx-2">-</span>
        <date-picker
          v-model="search.endDate"
          :lang="search.lang"
          value-type="format"
          :clearable="false"
          :disabled-date="disabledEndRange"
          disabled
        />
      </div>
      <button class="btn__search" @click="inquiry">검색</button>
    </article>
    <article aria-label="콘서트 리스트" class="grid">
      <!-- 리스트 카운트 -->
      <div class="grid__countbox">
        <div class="grid__count">
          Total :
          <span class="grid__count--point">{{ grid.page.totalCount }}</span> 건
        </div>
      </div>
      <!-- 리스트 -->
      <div class="grid__wrap">
        <table class="grid__base">
          <colgroup>
            <col width="5%" />
            <col width="17%" />
            <col width="9%" />
            <col width="4%" />
            <col width="9%" />
            <col width="11%" />
            <col width="4%" />
            <col width="5%" />
            <col width="7%" />
            <col width="10%" />
            <col width="6%" />
            <col width="7%" />
            <col width="6%" />
          </colgroup>
          <thead>
            <tr>
              <th>콘서트<br />ID</th>
              <th>콘서트 명</th>
              <th>아티스트</th>
              <th>회차</th>
              <th>공연일</th>
              <th>공연장</th>
              <th>노출여부</th>
              <th>좌석수</th>
              <th>좌석명</th>
              <th>좌석명(영문)</th>
              <th>보기</th>
              <th>좌석등록</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="grid.page.totalCount > 0">
              <tr
                v-for="s in grid.seatInfoList"
                :key="`seat-info-list-${s.id}`"
              >
                <td>{{ s.id }}</td>
                <td class="truncate">{{ s.concretNm }}</td>
                <td class="truncate">{{ s.artist }}</td>
                <td>{{ s.round }}</td>
                <td>{{ s.concretDate }}</td>
                <td>{{ s.concertHall }}</td>
                <td>{{ s.exposureYn }}</td>
                <td>{{ s.seatsNum }}</td>
                <td>{{ s.seatsNm }}</td>
                <td>{{ s.seatsNmEng }}</td>
                <td>
                  <button
                    type="button"
                    class="btn__secondary-line--sm"
                    @click="detail"
                  >
                    상세
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn__primary-line--sm"
                    @click="addSeat"
                  >
                    등록/재등록
                  </button>
                </td>
                <td>
                  <button type="button" class="btn__secondary--sm">삭제</button>
                </td>
              </tr>
            </template>
            <tr class="no-data" v-if="grid.page.totalCount === 0">
              <td colspan="13">검색된 결과가 없습니다.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <GridPagination
        v-if="grid.page.totalCount > 0"
        :total-count="grid.page.totalCount"
        :current-page="grid.page.currentPage"
        :limit="grid.page.limit"
        @changePage="changePage"
      />
    </article>
  </section>
</template>

<script>
import datePicker from 'vue2-datepicker'
import GridPagination from '@/components/common/GridPagination'

export default {
  name: 'SeatInfo',
  components: {
    GridPagination,
    datePicker,
  },
  data() {
    return {
      search: {
        // 공연,아티스트 선택
        searchType: '전체',
        searchTypeList: [
          {
            name: '전체',
            code: 'searchTypeAll',
          },
          {
            name: '콘서트 명',
            code: 'concretNm',
          },
          {
            name: '아티스트',
            code: 'artist',
          },
        ],
        // 콘서트 명
        concertNm: '',
        // 노출여부
        exposureYn: '전체',
        exposureYnList: [
          {
            name: '전체',
            code: 'exposureYnAll',
          },
          {
            name: '노출',
            code: 'exposure',
          },
          {
            name: '비노출',
            code: 'unexposed',
          },
        ],
        // 검색기간
        date: '전체',
        dateList: [
          {
            name: '전체',
            code: 'dateAll',
          },
          {
            name: '1개월',
            code: '1month',
          },
          {
            name: '3개월',
            code: '3month',
          },
          {
            name: '6개월',
            code: '6month',
          },
          {
            name: '기간검색',
            code: 'directInput',
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
      },
      grid: {
        seatInfoList: [
          {
            id: '20',
            concretNm: 'SMTOWN LIVE CONCERT in Seou',
            artist: 'SM TOWN',
            round: '1',
            concretDate: '2022-01-17 19:00',
            concertHall: '올림픽 체조경기장',
            exposureYn: '노출',
            seatsNum: '12,800',
            seatsNm: '층,구역,열,번호',
            seatsNmEng: 'Floor,Zone,Row,Col',
          },
          {
            id: '19',
            concretNm: 'SMTOWN LIVE CONCERT in Seou',
            artist: 'SM TOWN',
            round: '2',
            concretDate: '2022-01-18 19:00',
            concertHall: '올림픽 체조경기장',
            exposureYn: '비노출',
            seatsNum: '-',
            seatsNm: '-',
            seatsNmEng: '-',
          },
          {
            id: '18',
            concretNm: 'SMTOWN LIVE CONCERT in Seou',
            artist: 'SM TOWN',
            round: '3',
            concretDate: '2022-01-19 19:00',
            concertHall: '올림픽 체조경기장',
            exposureYn: '비노출',
            seatsNum: '-',
            seatsNm: '-',
            seatsNmEng: '-',
          },
          {
            id: '17',
            concretNm: 'NCT 127 2ND TOUR NEO CITY : SEOUL',
            artist: 'NCT 127',
            round: '1',
            concretDate: '2021-12-17 19:00',
            concertHall: '고척스카이돔',
            exposureYn: '노출',
            seatsNum: '12,800',
            seatsNm: '층,구역,열,번호',
            seatsNmEng: 'Floor,Zone,Row,Col',
          },
          {
            id: '16',
            concretNm: 'NCT 127 2ND TOUR NEO CITY : SEOUL',
            artist: 'NCT 127',
            round: '3',
            concretDate: '2021-12-18 18:00',
            concertHall: '고척스카이돔',
            exposureYn: '비노출',
            seatsNum: '-',
            seatsNm: '-',
            seatsNmEng: '-',
          },
          {
            id: '15',
            concretNm: 'NCT 127 2ND TOUR NEO CITY : SEOUL',
            artist: 'NCT 127',
            round: '3',
            concretDate: '2021-12-19 17:00',
            concertHall: '고척스카이돔',
            exposureYn: '비노출',
            seatsNum: '-',
            seatsNm: '-',
            seatsNmEng: '-',
          },
          {
            id: '14',
            concretNm: '동방신기 새앨범 판매콘서트',
            artist: '동방신기',
            round: '1',
            concretDate: '2021-02-22 15:00',
            concertHall: '올림픽 체조경기장',
            exposureYn: '노출',
            seatsNum: '12,800',
            seatsNm: '층,구역,열,번호',
            seatsNmEng: 'Floor,Zone,Row,Col',
          },
          {
            id: '12',
            concretNm: 'Red Velvet SPECIAL LIVE [2022 The ReVe Festival]',
            artist: '레드벨벳',
            round: '1',
            concretDate: '2021-01-01 15:00',
            concertHall: '올림픽공원 올림픽홀',
            exposureYn: '비노출',
            seatsNum: '-',
            seatsNm: '-',
            seatsNmEng: '-',
          },
          {
            id: '11',
            concretNm: 'Red Velvet SPECIAL LIVE [2022 The ReVe Festival]',
            artist: '레드벨벳',
            round: '2',
            concretDate: '2021-01-01 20:00',
            concertHall: '올림픽공원 올림픽홀',
            exposureYn: '비노출',
            seatsNum: '-',
            seatsNm: '-',
            seatsNmEng: '-',
          },
        ],
        page: {
          totalCount: 100,
          currentPage: 0,
          limit: 10,
        },
      },
    }
  },
  computed: {
    concertNmPla() {
      if (this.search.searchType.name === '콘서트 명') {
        return '콘서트 명 입력해 주세요.'
      } else if (this.search.searchType.name === '아티스트') {
        return '아티스트를 입력해 주세요.'
      } else {
        return ''
      }
    },
  },
  methods: {
    // datepicker
    // 시작일 선택값 변경
    disabledStartRange(date) {
      return date < new Date()
    },
    // 종료일 선택값 변경
    disabledEndRange(date) {
      return date < new Date()
    },
    inquiry() {
      // 조회
    },
    addSeat() {
      // 등록,재등록
      const routeObject = {
        name: 'SeatInfoAdd',
        params: {
          mode: 'create',
        },
      }
      this.$router.push(routeObject)
    },
    detail() {
      // 상세조회
      this.$router.push({ name: 'SeatInfoDetail', params: { mode: 'read' } })
    },
    delete() {
      // 삭제
    },
    changePage(page) {
      // 페이지네이션
      this.grid.page.currentPage = page
    },
  },
}
</script>

<style lang="scss" scoped></style>
