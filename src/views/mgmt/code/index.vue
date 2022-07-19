<template>
  <section aria-label="공통코드 관리" class="flex items-start">
    <section aria-label="그룹코드 영역" class="flex-1 mr-2 group-code">
      <article aria-label="검색 영역" class="search-form">
        <!-- 검색조건 -->
        <div class="w-32 mr-1">
          <v-select
            v-model="search.groupCode.searchType"
            :options="search.groupCode.searchTypeList"
            :reduce="(search) => search.codeValue"
            :label="'codeName'"
            :searchable="false"
            class="form__select"
          />
        </div>
        <div class="mr-4">
          <input
            v-model="search.groupCode.keyword"
            type="text"
            class="form__input"
            placeholder="검색어를 입력해 주세요."
            @keyup.enter="groupCodeInquiry"
          />
        </div>
        <!-- 사용 여부 -->
        <div class="flex items-center">
          <label class="search-form__label">사용 여부</label>
          <div class="w-20">
            <v-select
              v-model="search.groupCode.useYn"
              :options="search.groupCode.useYnList"
              :reduce="(search) => search.code"
              :label="'codeName'"
              :searchable="false"
              class="form__select"
            />
          </div>
        </div>
        <button class="btn__search" @click="groupCodeInquiry">조회</button>
      </article>
      <article aria-label="리스트 영역" class="grid mt-6">
        <div class="grid__countbox">
          <div class="grid__count">
            총
            <span class="grid__count--point">{{
              grid.groupCode.page.totalCount
            }}</span>
            건
          </div>
          <!-- 버튼영역 -->
          <div class="btn-group">
            <button
              type="button"
              class="btn__primary-line mr-1"
              @click="modifyGroupCodeDetail"
            >
              변경
            </button>
            <button
              type="button"
              class="btn__secondary-line mr-1"
              @click="deletSelectGroupCodeData"
            >
              선택 삭제
            </button>
            <button
              type="button"
              class="btn__primary"
              @click="openGroupCodeDetail"
            >
              등록
            </button>
          </div>
        </div>
        <div class="grid__wrap">
          <table class="grid__base">
            <colgroup>
              <col width="*" />
              <col width="30%" />
              <col width="30%" />
              <col width="10%" />
              <col width="25%" />
            </colgroup>
            <thead>
              <th>선택</th>
              <th>그룹 코드</th>
              <th>그룹 코드 명</th>
              <th>사용여부</th>
              <th>등록일시</th>
            </thead>
            <tbody>
              <template v-if="grid.groupCode.page.totalCount > 0">
                <tr
                  v-for="g in grid.groupCode.gridColumns"
                  :key="`group-code-list-${g.id}`"
                  @goToDetail="modifyGroupCodeDetail"
                >
                  <td>
                    <div class="form__checkbox">
                      <input ref="checkbox" type="checkbox" />
                    </div>
                  </td>
                  <td>{{ g.codeGroup }}</td>
                  <td class="link-style">{{ g.codeGroupNm }}</td>
                  <td>{{ g.useYn }}</td>
                  <td>{{ g.date }}</td>
                </tr>
              </template>
              <tr class="no-data" v-if="grid.groupCode.page.totalCount === 0">
                <td colspan="5">검색된 결과가 없습니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <GridPagination
          v-if="grid.groupCode.page.totalCount > 0"
          :total-count="grid.groupCode.page.totalCount"
          :current-page="grid.groupCode.page.currentPage"
          :limit="grid.groupCode.page.limit"
          @changePage="changeGroupCodePage"
        />
      </article>
    </section>
    <section aria-label="코드 영역" class="flex-1 ml-2 code">
      <article aria-label="검색 영역" class="search-form">
        <!-- 검색 조건 -->
        <div class="w-24 mr-1">
          <v-select
            v-model="search.code.searchType"
            :options="search.code.searchTypeList"
            :reduce="(search) => search.codeValue"
            :label="'codeName'"
            :searchable="false"
            class="form__select"
            @keyup.enter="codeInquiry(grid.code.groupCode)"
          />
        </div>
        <div class="mr-4 w-48">
          <input
            v-model="search.code.keyword"
            type="text"
            class="form__input"
            placeholder="검색어를 입력해 주세요."
          />
        </div>
        <!-- 변경 가능 여부 -->
        <div class="flex items-center mr-4">
          <label class="search-form__label">변경 여부</label>
          <div class="w-20">
            <v-select
              v-model="search.code.changeYn"
              :options="search.code.changeYnList"
              :reduce="(search) => search.code"
              :label="'codeName'"
              :searchable="false"
              class="form__select"
            />
          </div>
        </div>
        <!-- 사용 여부 -->
        <div class="flex items-center">
          <label class="search-form__label">사용 여부</label>
          <div class="w-20">
            <v-select
              v-model="search.code.useYn"
              :options="search.code.useYnList"
              :reduce="(search) => search.code"
              :label="'codeName'"
              :searchable="false"
              class="form__select"
            />
          </div>
        </div>
        <button class="btn__search" @click="codeInquiry(grid.code.groupCode)">
          조회
        </button>
      </article>
      <article aria-label="리스트 영역" class="grid mt-6">
        <div class="grid__countbox">
          <div class="grid__count">
            총
            <span class="grid__count--point">{{
              grid.code.page.totalCount
            }}</span>
            건
          </div>
          <!-- 버튼영역 -->
          <div class="btn-group">
            <button
              type="button"
              class="btn__primary-line mr-1"
              @click="modifyCodeDetail"
            >
              변경
            </button>
            <button
              type="button"
              class="btn__secondary-line mr-1"
              @click="deletSelectCodeData"
            >
              선택 삭제
            </button>
            <button type="button" class="btn__primary" @click="openCodeDetail">
              등록
            </button>
          </div>
        </div>
        <div class="grid__wrap">
          <table class="grid__base">
            <colgroup>
              <col width="*" />
              <col width="15%" />
              <col width="15%" />
              <col width="15%" />
              <col width="5%" />
              <col width="15%" />
              <col width="10%" />
              <col width="20%" />
            </colgroup>
            <thead>
              <th>선택</th>
              <th>코드</th>
              <th>코드 명</th>
              <th>코드 값</th>
              <th>순서</th>
              <th>코드변경<br />가능여부</th>
              <th>사용여부</th>
              <th>등록일시</th>
            </thead>
            <tbody>
              <template v-if="grid.code.page.totalCount > 0">
                <tr
                  v-for="g in grid.code.gridColumns"
                  :key="`code-list-${g.id}`"
                >
                  <td>
                    <div class="form__checkbox">
                      <input ref="checkbox" type="checkbox" />
                    </div>
                  </td>
                  <td>{{ g.code }}</td>
                  <td>{{ g.codeNm }}</td>
                  <td>{{ g.codeValue }}</td>
                  <td>{{ g.codeIndex }}</td>
                  <td>{{ g.chgPsblYn }}</td>
                  <td>{{ g.useYn }}</td>
                  <td>{{ g.date }}</td>
                </tr>
              </template>
              <tr class="no-data" v-if="grid.code.page.totalCount === 0">
                <td colspan="8">검색된 결과가 없습니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <GridPagination
          v-if="grid.code.page.totalCount > 0"
          :total-count="grid.code.page.totalCount"
          :current-page="grid.code.page.currentPage"
          :limit="grid.code.page.limit"
          @changePage="changeCodePage"
        />
      </article>
    </section>

    <!--  팝업 -->
    <GroupCodeDetailPopup
      v-if="popup.groupCode.view"
      :mode="popup.groupCode.mode"
      @closePopup="closedGroupCodeDetailPopup"
    />
    <CodeDetailPopup
      v-if="popup.code.view"
      :mode="popup.groupCode.mode"
      @closePopup="closedCodeDetailPopup"
    />
  </section>
</template>

<script>
import GridPagination from '@/components/common/GridPagination'
import GroupCodeDetailPopup from './GroupCodeDetailPopup.vue'
import CodeDetailPopup from './CodeDetailPopup.vue'

export default {
  name: 'CodeMgmt',
  components: { GridPagination, GroupCodeDetailPopup, CodeDetailPopup },
  data() {
    return {
      search: {
        groupCode: {
          useYn: '전체', // 그룹코드 사용 여부
          useYnList: ['전체', 'Y', 'N'], // 그룹코드 사용 여부 리스트
          searchType: '전체', // 그룹코드 검색 조건
          searchTypeList: ['전체', '그룹코드', '그룹코드 명'], // 그룹코드 검색 조건 리스트
          keyword: '', // 그룹코드 검색어
        },
        code: {
          changeYn: '전체', // 코드 변경 가능 여부
          changeYnList: ['전체', 'Y', 'N'], // 코드 변경 가능 여부 리스트
          useYn: '전체', // 코드 사용 여부
          useYnList: ['전체', 'Y', 'N'], // 코드 사용 여부 리스트
          searchType: '전체', // 코드 검색 조건
          searchTypeList: ['전체', '코드', '코드 명'], // 코드 검색 조건 리스트
          keyword: '', // 코드 검색어
        },
      },
      grid: {
        groupCode: {
          target: {},
          mode: '',
          page: {
            totalCount: 100,
            currentPage: 0,
            limit: 10,
          },
          gridColumns: [
            {
              codeGroup: 'SCH_TYPE',
              codeGroupNm: '검색 타입',
              useYn: 'Y',
              date: '2021-12-20 09:00',
            },
          ],
        },
        code: {
          mode: '',
          target: {},
          page: {
            totalCount: 100,
            currentPage: 0,
            limit: 10,
          },
          gridColumns: [
            {
              code: 'CODE',
              codeNm: '코드 1',
              codeValue: 'Code0',
              codeIndex: '1',
              chgPsblYn: 'Y',
              useYn: 'Y',
              date: '2021-12-20 09:00',
            },
          ],
        },
      },
      popup: {
        groupCode: {
          view: false,
          mode: '',
        },
        code: {
          view: false,
          mode: '',
        },
      },
    }
  },
  methods: {
    /* =================== 공통코드 =================== */
    groupCodeInquiry() {
      // 공통코드 조회
    },
    openGroupCodeDetail() {
      // 그룹코드 등록 팝업 오픈
      this.popup.groupCode.view = true
    },
    closedGroupCodeDetailPopup() {
      this.popup.groupCode.view = false
    },
    modifyGroupCodeDetail() {
      // 그룹코드 수정 팝업 오픈
    },
    deletSelectGroupCodeData() {
      // 그룹코드 리스트 삭제
    },

    changeGroupCodePage(page) {
      // 페이지네이션
      this.grid.groupCode.page.currentPage = page
    },
    /* =================== 코드 =================== */
    codeInquiry() {
      // 공통코드 조회
    },
    openCodeDetail() {
      // 코드 등록 팝업 오픈
      this.popup.code.view = true
    },
    closedCodeDetailPopup() {
      this.popup.code.view = false
    },
    modifyCodeDetail() {
      // 코드 수정 팝업 오픈
    },
    deletSelectCodeData() {
      // 코드 선택 삭제
    },

    changeCodePage(page) {
      // 페이지네이션
      this.grid.code.page.currentPage = page
    },
  },
}
</script>

<style lang="scss" scoped>
.search-form {
  input {
    min-width: inherit;
  }
}
</style>
