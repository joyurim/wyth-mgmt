<template>
  <section aria-label="응원도구 관리 조회 화면">
    <article aria-label="검색 영역" class="search-form">
      <!-- 응원도구 명 -->
      <div class="flex items-center mr-4">
        <label class="search-form__label">응원도구 이름</label>
        <input v-model="search.cheeringTool" type="text" class="form__input" />
      </div>
      <!-- 펌웨어 업데이트 -->
      <div class="flex items-center mr-4">
        <label class="search-form__label">펌웨어 업데이트</label>
        <div class="w-24">
          <v-select
            v-model="search.firmware"
            :options="search.firmwareList"
            label="name"
            :searchable="false"
          />
        </div>
      </div>
      <!-- 노출여부 -->
      <div class="flex items-center">
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
      <button class="btn__search" @click="inquiry">검색</button>
    </article>
    <article aria-label="응원도구 리스트" class="grid">
      <!-- 리스트 카운트 -->
      <div class="grid__countbox">
        <div class="grid__count">
          Total :
          <span class="grid__count--point">{{ grid.page.totalCount }}</span> 건
        </div>
        <!-- 버튼영역 -->
        <div class="btn-group">
          <button class="btn__primary-line" @click="addCheeringTool">
            추가
          </button>
        </div>
      </div>
      <!-- 리스트 -->
      <div class="grid__wrap">
        <table class="grid__base">
          <colgroup>
            <col width="10%" />
            <col width="25%" />
            <col width="15%" />
            <col width="15%" />
            <col width="15%" />
            <col width="10%" />
            <col width="10%" />
          </colgroup>
          <thead>
            <tr>
              <th>응원도구 ID</th>
              <th>응원도구 이름</th>
              <th>연동 프로토콜</th>
              <th>디바이스 이름</th>
              <th>모델명</th>
              <th>펌웨어 업데이트</th>
              <th>노출여부</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="grid.page.totalCount > 0">
              <tr
                v-for="c in grid.cheeringToolList"
                :key="`cheering-tool-list-${c.id}`"
              >
                <td>{{ c.toolId }}</td>
                <td>{{ c.toolNm }}</td>
                <td>{{ c.protocol }}</td>
                <td>{{ c.deviceNm }}</td>
                <td>{{ c.modelNm }}</td>
                <td>{{ c.firmware }}</td>
                <td>{{ c.exposureYn }}</td>
              </tr>
            </template>
            <tr class="no-data" v-if="grid.page.totalCount === 0">
              <td colspan="7">검색된 결과가 없습니다.</td>
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
  name: 'CheeringTtoolMgmt',
  components: {
    GridPagination,
  },
  data() {
    return {
      search: {
        cheeringTool: '',
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
        firmware: '전체',
        firmwareList: [
          {
            name: '전체',
            code: 'all',
          },
          {
            name: 'Y',
            code: 'Y',
          },
          {
            name: 'N',
            code: 'N',
          },
        ],
      },
      grid: {
        cheeringToolList: [
          {
            toolId: '33',
            toolNm: '엑소봉 Ver.3',
            protocol: 'BEATRO_V1',
            deviceNm: 'EXO_FANLIGHT',
            modelNm: 'SME-EXO-OFL03',
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
  methods: {
    inquiry() {
      // 조회
    },
    addCheeringTool() {
      // 응원도구 추가
      const routeObject = {
        name: 'CheeringToolDetail',
        params: {
          mode: 'create',
        },
      }
      this.$router.push(routeObject)
    },
    changePage(page) {
      // 페이지네이션
      this.grid.page.currentPage = page
    },
  },
}
</script>

<style lang="scss" scoped></style>
