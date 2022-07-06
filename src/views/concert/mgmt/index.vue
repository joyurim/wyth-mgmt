<template>
  <section aria-label="콘서트 관리 조회 화면">
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
      <div class="w-64 mr-1">
        <v-select
          v-model="search.concertNm"
          :options="search.concertNmList"
          label="name"
          :searchable="false"
        />
      </div>
      <!-- 회차 -->
      <!-- TODO : 회차는 콘서트 명에서 특정 콘서트를 선택했을 경우에만 노출됩니다. -->
      <div class="w-16">
        <v-select
          v-model="search.round"
          :options="search.roundList"
          label="name"
          :searchable="false"
        />
      </div>
      <!-- 상태 -->
      <div class="flex items-center ml-7 mr-4">
        <label class="search-form__label">상태</label>
        <div class="w-24">
          <v-select
            v-model="search.status"
            :options="search.statusList"
            label="name"
            :searchable="false"
          />
        </div>
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
        <!-- 버튼영역 -->
        <div class="btn-group">
          <button class="btn__primary-line" @click="addConcert">
            콘서트 추가
          </button>
        </div>
      </div>
      <!-- 리스트 -->
      <div class="grid__wrap">
        <table class="grid__base">
          <colgroup>
            <col width="5%" />
            <col width="20%" />
            <col width="10%" />
            <col width="7%" />
            <col width="7%" />
            <col width="5%" />
            <col width="12%" />
            <col width="5%" />
            <col width="5%" />
            <col width="12%" />
            <col width="6%" />
            <col width="6%" />
          </colgroup>
          <thead>
            <tr>
              <th>콘서트<br />ID</th>
              <th>콘서트 명</th>
              <th>아티스트</th>
              <th>콘서트<br />시작일</th>
              <th>콘서트<br />종료일</th>
              <th>회차</th>
              <th>공연장</th>
              <th>상태</th>
              <th>노출여부</th>
              <th>등록일시</th>
              <th>보기</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="grid.page.totalCount > 0">
              <tr
                v-for="c in grid.concertList"
                :key="`concert-mgmt-list-${c.id}`"
              >
                <td>{{ c.id }}</td>
                <td class="truncate">{{ c.concretNm }}</td>
                <td class="truncate">{{ c.artist }}</td>
                <td>{{ c.startDate }}</td>
                <td>{{ c.endDate }}</td>
                <td>{{ c.round }}</td>
                <td>{{ c.concertHall }}</td>
                <td>{{ c.status }}</td>
                <td>{{ c.exposureYn }}</td>
                <td>{{ c.rgstrDate }}</td>
                <td>
                  <button type="button" class="btn__secondary-line--sm">
                    상세
                  </button>
                </td>
                <td>
                  <button type="button" class="btn__secondary--sm">삭제</button>
                </td>
              </tr>
            </template>
            <tr class="no-data" v-if="grid.page.totalCount === 0">
              <td colspan="12">검색된 결과가 없습니다.</td>
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
import GridPagination from '@/components/common/GridPagination'
import datePicker from 'vue2-datepicker'

export default {
  name: 'ConcertMgmt',
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
            name: '공연명',
            code: 'concretNm',
          },
          {
            name: '아티스트',
            code: 'artist',
          },
        ],
        // 콘서트명 선택
        concertNm: '콘서트1',
        concertNmList: [
          {
            name: '콘서트1',
            code: 'concert1',
          },
          {
            name: '콘서트 2(회차노출)',
            code: 'concert2',
          },
          {
            name: '콘서트 3',
            code: 'concert3',
          },
        ],
        // 회차
        round: '1',
        roundList: [
          {
            name: '5',
            code: 'round5',
          },
          {
            name: '4',
            code: 'round4',
          },
          {
            name: '3',
            code: 'round3',
          },
          {
            name: '2',
            code: 'round2',
          },
          {
            name: '1',
            code: 'round1',
          },
        ],
        // 상태
        status: '전체',
        statusList: [
          {
            name: '전체',
            code: 'statusAll',
          },
          {
            name: '예정',
            code: 'schedule',
          },
          {
            name: '진행중',
            code: 'ongoing',
          },
          {
            name: '종료',
            code: 'end',
          },
        ],
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
        concertList: [
          {
            id: '20',
            concretNm: 'SMTOWN LIVE CONCERT in Seou',
            artist: 'SM TOWN',
            startDate: '2021-03-14',
            endDate: '2021-03-14',
            round: '1',
            concertHall: '올림픽 체조경기장',
            status: '예정',
            exposureYn: '비노출',
            rgstrDate: '2021-03-01 15:01:47',
          },
          {
            id: '19',
            concretNm: '동방신기 새앨범 판매콘서트',
            artist: '동방신기',
            startDate: '2021-02-14',
            endDate: '2021-02.16',
            round: '6',
            concertHall: '올림픽 체조경기장',
            status: '예정',
            exposureYn: '비노출',
            rgstrDate: '2021-02-01 15:01:47',
          },
          {
            id: '18',
            concretNm: 'Red Velvet SPECIAL LIVE [2022 The ReVe Festival]',
            artist: '레드벨벳',
            startDate: '2021-02-01',
            endDate: '2021-02-02',
            round: '3',
            concertHall: '올림픽공원 올림픽홀',
            status: '예정',
            exposureYn: '노출',
            rgstrDate: '2021-02-01 15:01:47',
          },
          {
            id: '17',
            concretNm: 'EXO PLANET#5 - EXplOration',
            artist: 'EXO',
            startDate: '2021-01-31',
            endDate: '2021-02-01',
            round: '4',
            concertHall: '고척 스카이돔',
            status: '진행중',
            exposureYn: '노출',
            rgstrDate: '2021-01-01 15:01:47',
          },
          {
            id: '16',
            concretNm: 'BoA THE LIVE 2018 in SEOUL',
            artist: 'BoA',
            startDate: '2021-01-01',
            endDate: '2021-01-01',
            round: '1',
            concertHall: '세종문화회관',
            status: '종료',
            exposureYn: '노출',
            rgstrDate: '2021-01-01 15:01:47',
          },
          {
            id: '15',
            concretNm: 'TAEYEON SPECIAL LIVE ',
            artist: '태연',
            startDate: '2020-12-22',
            endDate: '2020-12-24',
            round: '3',
            concertHall: '경희대학교 평화의전당',
            status: '종료',
            exposureYn: '노출',
            rgstrDate: '2020-12-01 15:01:47',
          },
          {
            id: '14',
            concretNm: '[THE AGIT] Love, Still – Seohyun',
            artist: '서현',
            startDate: '2020-04-08',
            endDate: '2020-04-09',
            round: '2',
            concertHall: '코엑스 아티움 SMTOWN',
            status: '종료',
            exposureYn: '노출',
            rgstrDate: '2020-04-01 15:01:47',
          },
          {
            id: '13',
            concretNm: 'SHINee SPECIAL PARTY - THE SHINING',
            artist: '샤이니',
            startDate: '2020-03-01',
            endDate: '2020-03-02',
            round: '2',
            concertHall: 'KSPO DOME (올림픽체조경기장)',
            status: '종료',
            exposureYn: '노출',
            rgstrDate: '2021-02-20 15:01:47',
          },
          {
            id: '12',
            concretNm: 'TAEYEON Concert - The UNSEEN',
            artist: '태연',
            startDate: '2020.01.17',
            endDate: '2020.01.19',
            round: '4',
            concertHall: '올림픽공원 SK올림픽핸드볼경기장',
            status: '종료',
            exposureYn: '노출',
            rgstrDate: '2020-01-01 15:01:47',
          },
          {
            id: '11',
            concretNm: '2019 CHANGWON K-POP WORLD FESTIVAL',
            artist: '레드벨벳',
            startDate: '2019.10.11',
            endDate: '2019.10.11',
            round: '1',
            concertHall: '창원스포츠파크주경기장',
            status: '종료',
            exposureYn: '노출',
            rgstrDate: '2021-01-01 15:01:47',
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
    addConcert() {
      // 콘서트 추가
    },
    changePage(page) {
      // 페이지네이션
      this.grid.page.currentPage = page
    },
  },
}
</script>

<style lang="scss" scoped></style>
