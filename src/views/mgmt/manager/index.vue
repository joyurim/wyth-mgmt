<template>
  <section aria-label="관리자 관리">
    <article aria-label="검색 영역" class="search-form">
      <!-- 검색어 선택 -->
      <div class="w-28 mr-1">
        <v-select
          v-model="search.searchType"
          :options="search.searchTypeList"
          label="name"
          :searchable="false"
        />
      </div>
      <div class="mr-4">
        <input v-model="search.searchword" type="text" class="form__input" />
      </div>
      <!-- 노출여부 -->
      <div class="flex items-center">
        <label class="search-form__label">사용여부</label>
        <div class="w-24">
          <v-select
            v-model="search.useYn"
            :options="search.useYnList"
            label="name"
            :searchable="false"
          />
        </div>
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
          <button class="btn__primary-line" @click="addMgmt">
            관리자 추가
          </button>
        </div>
      </div>
      <!-- 리스트 -->
      <div class="grid__wrap">
        <table class="grid__base">
          <colgroup>
            <col width="10%" />
            <col width="20%" />
            <col width="20%" />
            <col width="20%" />
            <col width="25%" />
          </colgroup>
          <thead>
            <tr>
              <th>ID</th>
              <th>이름</th>
              <th>관리자 레벨</th>
              <th>사용여부</th>
              <th>최종 로그인</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="grid.page.totalCount > 0">
              <tr
                v-for="m in grid.mgmtList"
                :key="`mgmt-list-${m.id}`"
                @dblclick="goToDetail"
              >
                <td>{{ m.id }}</td>
                <td>{{ m.name }}</td>
                <td>{{ m.level }}</td>
                <td>{{ m.useYn }}</td>
                <td>{{ m.finalLogin }}</td>
              </tr>
            </template>
            <tr class="no-data" v-if="grid.page.totalCount === 0">
              <td colspan="5">검색된 결과가 없습니다.</td>
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
  name: 'ManagerMgmt',
  components: {
    GridPagination,
  },
  data() {
    return {
      search: {
        searchType: '전체',
        searchTypeList: [
          {
            name: '전체',
            code: 'searchTypeAll',
          },
          {
            name: 'ID',
            code: 'userId',
          },
          {
            name: '이름',
            code: 'name',
          },
        ],
        searchword: '',
        useYn: 'All',
        useYnList: ['All', 'Y', 'N'],
      },
      grid: {
        mgmtList: [
          {
            id: 'Admin_1',
            name: '홍길동',
            level: '총관리자',
            useYn: 'Y',
            finalLogin: '2021-03-01 15:01:47',
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
    addMgmt() {
      // 관리자 추가
      const routeObject = {
        name: 'ManagerMgmtDetail',
        params: {
          mode: 'create',
        },
      }
      this.$router.push(routeObject)
    },
    goToDetail() {
      // 상세조회
      this.$router.push({ name: 'ManagerMgmtDetail', params: { mode: 'read' } })
    },
    changePage(page) {
      // 페이지네이션
      this.grid.page.currentPage = page
    },
  },
}
</script>

<style lang="scss" scoped></style>
