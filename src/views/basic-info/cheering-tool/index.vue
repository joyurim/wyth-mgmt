<template>
  <section aria-label="응원도구 관리 조회 화면">
    <article aria-label="검색 영역" class="search-form">
      <!-- 응원도구 명 -->
      <div class="mr-4">
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
      <!-- <div class="grid__wrap">
        <table class="grid__base">
          <colgroup>
            <col width="15%" />
            <col width="40%" />
            <col width="15%" />
            <col width="15%" />
            <col width="15%" />
          </colgroup>
          <thead>
            <tr>
              <th>아티스트 ID</th>
              <th>아티스트 명</th>
              <th>데뷔일</th>
              <th>타입</th>
              <th>노출여뷰</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="grid.page.totalCount > 0">
              <tr v-for="a in grid.artistList" :key="`artist-list-${a.id}`">
                <td>{{ a.artistId }}</td>
                <td>{{ a.artistNm }}</td>
                <td>{{ a.debutDate }}</td>
                <td>{{ a.debutType }}</td>
                <td>{{ a.exposureYn }}</td>
              </tr>
            </template>
            <tr class="no-data" v-if="grid.page.totalCount === 0">
              <td colspan="5">검색된 결과가 없습니다.</td>
            </tr>
          </tbody>
        </table>
      </div> -->
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
export default {
  name: 'CheeringTtoolMgmt',
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
            name: 'Y',
            code: 'exposure',
          },
          {
            name: 'N',
            code: 'unexposed',
          },
        ],
        firmware: '전체',
        firmwareList: [
          {
            name: '전체',
            code: 'exposureYnAll',
          },
          {
            name: 'Y',
            code: 'exposure',
          },
          {
            name: 'N',
            code: 'unexposed',
          },
        ],
      },
      grid: {
        artistList: [
          {
            artistId: '33',
            artistNm: '레드벨벳',
            debutDate: '2014.08.04',
            debutType: '그룹',
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
    addCheeringTool() {},
    changePage(page) {
      // 페이지네이션
      this.grid.page.currentPage = page
    },
  },
}
</script>

<style lang="scss" scoped></style>
