<template>
  <section aria-label="아티스트 관리 조회 화면">
    <article aria-label="검색 영역" class="search-form">
      <!-- 아티스트 타입 -->
      <div class="w-28 mr-1">
        <v-select
          v-model="search.artistType"
          :options="search.artistTypeList"
          label="name"
          :searchable="false"
        />
      </div>
      <!-- 아티스트명 -->
      <div class="mr-1">
        <input
          v-model="search.artistNm"
          type="text"
          placeholder="아티스트 명을 입력해주세요."
          :readonly="search.artistType.name === '전체'"
          class="form__input"
        />
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
  name: 'ArtistMgmt',
  components: {
    GridPagination,
  },
  data() {
    return {
      search: {
        artistType: '전체',
        artistTypeList: [
          {
            name: '전체',
            code: 'searchTypeAll',
          },
          {
            name: '그룹',
            code: 'group',
          },
          {
            name: '솔로',
            code: 'solo',
          },
        ],
        artistNm: '',
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
    changePage(page) {
      // 페이지네이션
      this.grid.page.currentPage = page
    },
  },
}
</script>

<style lang="scss" scoped></style>
