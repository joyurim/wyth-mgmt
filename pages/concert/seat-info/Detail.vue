<template>
  <section aria-label="좌석 관리 상세 화면" class="SeatInfo">
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
        <div class="flex items-center">
          <!-- 콘서트 회차 -->
          <div class="flex-1 flex items-center pr-8">
            <label class="form__label">콘서트 회차</label>
            <input
              v-model="roundInfo.round"
              type="text"
              readonly
              class="form__input"
            />
          </div>
          <!-- 노출여부 -->
          <div class="flex-1 flex items-center pl-8">
            <label class="form__label">노출여부</label>
            <input
              v-model="roundInfo.exposureYn"
              type="text"
              readonly
              class="form__input"
            />
          </div>
        </div>
        <div class="flex items-center mt-2">
          <!-- 콘서트 일시 -->
          <div class="flex-1 flex items-center pr-8">
            <label class="form__label">콘서트 일시</label>
            <input
              v-model="roundInfo.date"
              type="text"
              readonly
              class="form__input"
            />
          </div>
          <!-- 등록 좌석수 -->
          <div class="flex-1 flex items-center pl-8">
            <label class="form__label">등록 좌석수</label>
            <input
              v-model="roundInfo.seatsNum"
              type="text"
              readonly
              class="form__input"
            />
          </div>
        </div>
      </div>
    </article>
    <!-- 좌석정보 관리 -->
    <article class="form__box flex items-center">
      <label class="form__label font-medium">좌석정보 관리</label>
      <div class="flex-1 flex items-center">
        <!-- Floor -->
        <div class="flex items-center mr-6">
          <label class="form__label form__label--sm">Floor</label>
          <div class="w-28">
            <v-select
              v-model="seatInfo.floor"
              :options="seatInfo.floorList"
              label="name"
              :searchable="false"
            />
          </div>
        </div>
        <!-- Zone -->
        <div class="flex items-center mr-6">
          <label class="form__label form__label--sm">Zone</label>
          <div class="w-28">
            <v-select
              v-model="seatInfo.zone"
              :options="seatInfo.zoneList"
              label="name"
              :searchable="false"
            />
          </div>
        </div>
        <!-- Row -->
        <div class="flex items-center mr-6">
          <label class="form__label form__label--sm">Row</label>
          <div class="w-28">
            <v-select
              v-model="seatInfo.row"
              :options="seatInfo.rowList"
              label="name"
              :searchable="false"
            />
          </div>
        </div>
        <!-- Col -->
        <div class="flex items-center mr-2">
          <label class="form__label form__label--sm">Col</label>
          <div class="w-28">
            <v-select
              v-model="seatInfo.col"
              :options="seatInfo.colList"
              label="name"
              :searchable="false"
            />
          </div>
        </div>
        <button class="btn__search" @click="inquiry">검색</button>
      </div>
    </article>

    <article aria-label="좌석정보 리스트" class="grid mt-6">
      <!-- 리스트 카운트 -->
      <div class="grid__countbox">
        <div class="grid__count">
          Total :
          <span class="grid__count--point">{{ grid.page.totalCount }}</span> 건
        </div>
        <!-- 버튼영역 -->
        <div class="btn-group">
          <button class="btn__secondary-line" @click="excelDownload">
            엑셀 다운로드
          </button>
        </div>
      </div>
      <!-- 리스트 -->
      <div class="grid__wrap">
        <table class="grid__base">
          <colgroup>
            <col width="6%" />
            <col width="8%" />
            <col width="8%" />
            <col width="8%" />
            <col width="8%" />
            <col width="8%" />
            <col width="24%" />
            <col width="10%" />
            <col width="10%" />
            <col width="10%" />
          </colgroup>
          <thead>
            <tr>
              <th>콘서트<br />ID</th>
              <th>Floor</th>
              <th>Zone</th>
              <th>Block</th>
              <th>Row</th>
              <th>Col</th>
              <th>좌표데이터</th>
              <th>생성일</th>
              <th>매칭상태</th>
              <th>매칭일</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="grid.page.totalCount > 0">
              <tr
                v-for="d in grid.seatInfoDetailList"
                :key="`seat-info-datail-list-${d.id}`"
              >
                <td>{{ d.id }}</td>
                <td>{{ d.floor }}</td>
                <td>{{ d.zone }}</td>
                <td>{{ d.block }}</td>
                <td>{{ d.row }}</td>
                <td>{{ d.col }}</td>
                <td class="truncate">{{ d.seatData }}</td>
                <td>{{ d.creationDate }}</td>
                <td>{{ d.matchingStatus }}</td>
                <td>{{ d.matchingDate }}</td>
              </tr>
            </template>
            <tr class="no-data" v-if="grid.page.totalCount === 0">
              <td colspan="10">검색된 결과가 없습니다.</td>
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

export default {
  name: 'SeatInfoDetail',
  components: {
    GridPagination,
  },
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
        exposureYn: '',
        date: '',
        seatsNum: '',
      },
      seatInfo: {
        matchingStatus: '전체',
        matchingStatusList: ['전체', 'Y', 'N'],
        floor: '전체',
        floorList: ['전체', '1', '2'],
        zone: '전체',
        zoneList: ['전체', '1', '2'],
        row: '전체',
        rowList: ['전체', '1', '2', '3', '4', '5', '6'],
        col: '전체',
        colList: ['전체', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      },
      grid: {
        seatInfoDetailList: [
          {
            id: '20',
            floor: '1',
            zone: '1',
            block: '-',
            row: '12',
            col: '8',
            seatData:
              ' {“B01”,”26”,”B02”,”0”,”B03”,”5”,”B04”,”B05”,”6”,”B04”,”B05”,”6”',
            creationDate: '2021-12-10  19:00:45',
            matchingStatus: 'N',
            matchingDate: '2021-12-17 15:18:00',
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
      // 검색
    },
    excelDownload() {
      // 엑셀다운로드
    },
    changePage(page) {
      // 페이지네이션
      this.grid.page.currentPage = page
    },
  },
}
</script>

<style lang="scss" scoped>
.SeatInfo {
  .form__box {
    padding: 10px;
    border-top: 1px solid $gray-20;
    + .form__box {
      border-top: none;
    }
    .form__label--sm {
      min-width: 80px;
    }
  }
}
</style>
