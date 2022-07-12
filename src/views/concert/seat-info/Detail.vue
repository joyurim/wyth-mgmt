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
            <input type="text" readonly class="form__input" />
          </div>
          <!-- 콘서트 노출여부 -->
          <div class="flex-1 flex items-center pl-8">
            <label class="form__label">콘서트 노출여부</label>
            <input type="text" readonly class="form__input" />
          </div>
        </div>
        <div class="flex items-center mt-2">
          <!-- 콘서트 명 -->
          <div class="flex-1 flex items-center pr-8">
            <label class="form__label">콘서트 명 </label>
            <input type="text" readonly class="form__input" />
          </div>
          <!-- 공연장 -->
          <div class="flex-1 flex items-center pl-8">
            <label class="form__label">공연장</label>
            <input type="text" readonly class="form__input" />
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
            <input type="text" readonly class="form__input" />
          </div>
          <!-- 노출여부 -->
          <div class="flex-1 flex items-center pl-8">
            <label class="form__label">노출여부</label>
            <input type="text" readonly class="form__input" />
          </div>
        </div>
        <div class="flex items-center mt-2">
          <!-- 공연일 -->
          <div class="flex-1 flex items-center pr-8">
            <label class="form__label">공연일</label>
            <input type="text" readonly class="form__input" />
          </div>
          <!-- 등록 좌석수 -->
          <div class="flex-1 flex items-center pl-8">
            <label class="form__label">등록 좌석수</label>
            <input type="text" readonly class="form__input" />
          </div>
        </div>
      </div>
    </article>
    <!-- 좌석정보 관리 -->
    <article class="form__box flex items-center">
      <label class="form__label font-medium">좌석정보 관리</label>
      <div class="flex-1 flex items-center">
        <!-- 매칭 상태 -->
        <div class="flex items-center mr-4">
          <label class="form__label form__label--sm">매칭 상태</label>
          <div class="w-28 mr-1">
            <v-select
              v-model="seatInfo.matching"
              :options="seatInfo.matchingStatusList"
              label="name"
              :searchable="false"
            />
          </div>
        </div>
        <!-- Floor -->
        <div class="flex items-center mr-4">
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
        <div class="flex items-center mr-4">
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
        <div class="flex items-center mr-4">
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
  </section>
</template>

<script>
export default {
  name: 'SeatInfoDetail',
  data() {
    return {
      seatInfo: {
        matching: '전체',
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
    }
  },
  methods: {
    inquiry() {
      // 검색
    },
  },
}
</script>

<style lang="scss" scoped>
.SeatInfo {
  .form__box {
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
