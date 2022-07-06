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
          <span class="grid__count--point">00</span> 건
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
            <col width="13%" />
            <col width="10%" />
            <col width="10%" />
            <col width="10%" />
            <col width="6%" />
            <col width="8%" />
            <col width="6%" />
            <col width="6%" />
            <col width="8%" />
            <col width="6%" />
            <col width="6%" />
          </colgroup>
          <thead>
            <tr>
              <th>콘서트 ID</th>
              <th>콘서트 명</th>
              <th>아티스트</th>
              <th>시작일</th>
              <th>종료일</th>
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
                <button type="button" class="btn__primary-line">상세</button>
              </td>
              <td>
                <button type="button" class="btn__secondary">삭제</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  </section>
</template>
<script>
export default {
  name: 'ConcertMgmt',
  components: {},
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
  },
}
</script>

<style lang="scss" scoped></style>
