<template>
  <Popup
    :popup-name="popup.name"
    :title="popup.title"
    :width="popup.width"
    :height="popup.height"
    @confirm="confirmPopup"
    @cancel="cancelPopup"
    @closed="handleClosed"
  >
    <div class="grid">
      <article class="search-form">
        <div class="w-32 mr-1">
          <v-select
            v-model="search.searchType"
            :options="search.searchTypeList"
            label="name"
            :searchable="false"
          />
        </div>
        <div class="mr-1">
          <input
            v-model="search.keyword"
            type="text"
            class="form__input"
            @keyup.enter="inquiry"
          />
        </div>
        <button class="btn__search" @click="inquiry">검색</button>
      </article>
      <article class="grid__countbox">
        <div class="grid__count">
          Total :
          <span class="grid__count--point">{{ grid.page.totalCount }}</span> 건
        </div>
      </article>
      <article class="grid__wrap">
        <table class="grid__base">
          <colgroup>
            <col width="10%" />
            <col width="17%" />
            <col width="18%" />
            <col width="18%" />
            <col width="17%" />
            <col width="10%" />
            <col width="10%" />
          </colgroup>
          <thead>
            <tr>
              <th>응원도구 ID</th>
              <th>응원도구 이름</th>
              <th>연동 프로토콜</th>
              <th>Stick BLE Name</th>
              <th>Stick Model</th>
              <th>펌웨어<br />업데이트</th>
              <th>노출여부</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="grid.page.totalCount > 0">
              <tr
                v-for="c in grid.cheeringToolList"
                :key="`concert-mgmt-detail-popup-${c.id}`"
              >
                <td>{{ c.cheeringId }}</td>
                <td>{{ c.cheeringNm }}</td>
                <td>{{ c.protocol }}</td>
                <td>{{ c.stickBleNm }}</td>
                <td>{{ c.stickModel }}</td>
                <td>{{ c.firmware }}</td>
                <td>{{ c.exposureYn }}</td>
              </tr>
            </template>
            <tr class="no-data" v-if="grid.page.totalCount === 0">
              <td colspan="7">검색된 결과가 없습니다.</td>
            </tr>
          </tbody>
        </table>
      </article>
      <GridPagination
        v-if="grid.page.totalCount > 0"
        :total-count="grid.page.totalCount"
        :current-page="grid.page.currentPage"
        :limit="grid.page.limit"
        @changePage="changePage"
      />
    </div>
  </Popup>
</template>

<script>
import Popup from '@/components/common/PopupBasic'
import GridPagination from '@/components/common/GridPagination'

export default {
  name: 'CheeringToolPP',
  components: {
    Popup,
    GridPagination,
  },
  data() {
    return {
      popup: {
        name: 'cheeringToolPopup',
        title: '응원도구 검색',
        width: '800',
      },
      search: {
        searchType: '전체',
        searchTypeList: [
          '전체',
          '응원도구 ID',
          '응원도구 이름',
          'Stick BLE',
          'Stick Model',
        ],
        keyword: '',
      },
      grid: {
        cheeringToolList: [
          {
            cheeringId: '20',
            cheeringNm: '엑소봉 Ver.3',
            protocol: 'BEATRO_V1',
            stickBleNm: 'EXO_FANLIGHT',
            stickModel: 'SME-EXO-OFL03',
            firmware: 'Y',
            exposureYn: '노출',
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
  mounted() {
    this.open()
  },
  methods: {
    inquiry() {
      // 조회
    },
    changePage(page) {
      // 페이지네이션
      this.grid.page.currentPage = page
    },
    open() {
      this.$modal.show(this.popup.name)
    },
    handleClosed() {
      this.$emit('closePopup')
      this.$modal.hide(this.popup.name)
    },
    confirmPopup() {
      this.$toasted.show('확인되었습니다')
      this.handleClosed()
    },
    cancelPopup() {
      this.$toasted.show('취소되었습니다')
    },
  },
}
</script>

<style lang="scss" scoped></style>
