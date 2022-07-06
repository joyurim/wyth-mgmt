<template>
  <section aria-label="콘서트 관리 조회 화면">
    <article aria-label="검색 영역" class="search-form">
      <div class="flex-1">
        <div class="w-24">
          <v-select
            v-model="selectbox1"
            :options="options"
            label="name"
            :searchable="false"
          />
        </div>
      </div>
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
          <button class="btn__primary" @click="addConcert">콘서트 추가</button>
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
                <td>{{ c.concretNm }}</td>
                <td>{{ c.artist }}</td>
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
      <pagination
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
import pagination from '@/components/common/Pagination'

export default {
  name: 'ConcertMgmt',
  components: {
    pagination,
  },
  data() {
    return {
      options: [
        {
          name: '사과',
          code: 'apple',
        },
        {
          name: '레몬',
          code: 'lemon',
        },
        {
          name: '키위',
          code: 'kiwi',
        },
      ],
      selectbox1: {
        name: '',
        code: '',
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
            concretNm: '',
            artist: '',
            startDate: '',
            endDate: '',
            round: '',
            concertHall: '',
            status: '',
            exposureYn: '',
            rgstrDate: '',
          },
          {
            id: '18',
            concretNm: '',
            artist: '',
            startDate: '',
            endDate: '',
            round: '',
            concertHall: '',
            status: '',
            exposureYn: '',
            rgstrDate: '',
          },
          {
            id: '17',
            concretNm: '',
            artist: '',
            startDate: '',
            endDate: '',
            round: '',
            concertHall: '',
            status: '',
            exposureYn: '',
            rgstrDate: '',
          },
          {
            id: '16',
            concretNm: '',
            artist: '',
            startDate: '',
            endDate: '',
            round: '',
            concertHall: '',
            status: '',
            exposureYn: '',
            rgstrDate: '',
          },
          {
            id: '15',
            concretNm: '',
            artist: '',
            startDate: '',
            endDate: '',
            round: '',
            concertHall: '',
            status: '',
            exposureYn: '',
            rgstrDate: '',
          },
          {
            id: '14',
            concretNm: '',
            artist: '',
            startDate: '',
            endDate: '',
            round: '',
            concertHall: '',
            status: '',
            exposureYn: '',
            rgstrDate: '',
          },
          {
            id: '13',
            concretNm: '',
            artist: '',
            startDate: '',
            endDate: '',
            round: '',
            concertHall: '',
            status: '',
            exposureYn: '',
            rgstrDate: '',
          },
          {
            id: '12',
            concretNm: '',
            artist: '',
            startDate: '',
            endDate: '',
            round: '',
            concertHall: '',
            status: '',
            exposureYn: '',
            rgstrDate: '',
          },
          {
            id: '11',
            concretNm: '',
            artist: '',
            startDate: '',
            endDate: '',
            round: '',
            concertHall: '',
            status: '',
            exposureYn: '',
            rgstrDate: '',
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
