<template>
  <section aria-label="펌웨어 업데이트 통계 리스트">
    <article aria-label="검색 영역" class="search-form">
      <!-- 응원도구 -->
      <div class="flex items-center mr-4">
        <label class="form__label">응원도구</label>
        <div class="w-40">
          <v-select
            v-model="search.cheeringTool"
            :options="search.cheeringToolList"
            label="name"
            :searchable="false"
          />
        </div>
      </div>
      <!-- OS -->
      <div class="flex items-center mr-4">
        <label class="form__label">OS</label>
        <div class="w-32">
          <v-select
            v-model="search.os"
            :options="search.osList"
            label="name"
            :searchable="false"
          />
        </div>
      </div>
      <!-- 언어 -->
      <div class="flex items-center mr-4">
        <label class="form__label">언어</label>
        <div class="w-32">
          <v-select
            v-model="search.language"
            :options="search.languageList"
            label="name"
            :searchable="false"
          />
        </div>
      </div>
      <!-- 업데이트 성공여부 -->
      <div class="flex items-center mr-4">
        <label class="form__label">업데이트 성공여부</label>
        <div class="w-32">
          <v-select
            v-model="search.updateSuccessYn"
            :options="search.updateSuccessYnList"
            label="name"
            :searchable="false"
          />
        </div>
      </div>
      <!-- 오류 코드 -->
      <div class="flex items-center mr-4">
        <label class="form__label">오류 코드</label>
        <div class="w-40">
          <v-select
            v-model="search.errorCode"
            :options="search.errorCodeList"
            label="name"
            :searchable="false"
          />
        </div>
      </div>
      <!-- 오류 내용 -->
      <div class="flex itmes-center">
        <label class="form__label">오류 내용</label>
        <input v-model="search.errorCntnt" type="text" class="form__input" />
      </div>
      <button class="btn__search" @click="inquiry">검색</button>
    </article>
    <article aria-label="리스트 영역" class="grid mt-6">
      <label class="form__label font-medium">펌웨어 업데이트 통계</label>
      <div class="grid__wrap">
        <table class="grid__base">
          <colgroup>
            <col width="6%" />
            <col width="12%" />
            <col width="12%" />
            <col width="10%" />
            <col width="15%" />
            <col width="15%" />
            <col width="15%" />
            <col width="15%" />
          </colgroup>
          <thead>
            <tr>
              <th>No</th>
              <th>응원도구 이름</th>
              <th>응원도구 모델명</th>
              <th>업데이트 수</th>
              <th>Android<br />전체비율(횟수)</th>
              <th>Android<br />성공율(성공/실패)</th>
              <th>IOS<br />전체비율(횟수)</th>
              <th>IOS<br />성공율(성공/실패)</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="u in grid.firmwareUpdataList"
              :key="`firmware-updata-list-${u.id}`"
            >
              <td>{{ u.id }}</td>
              <td>{{ u.cheeringToolNm }}</td>
              <td>{{ u.modelNmch }}</td>
              <td>{{ u.nmbrUpdts }}</td>
              <td>{{ u.androidOverallRatio }}</td>
              <td>{{ u.androidSuccessRate }}</td>
              <td>{{ u.iosOverallRatio }}</td>
              <td>{{ u.iosSuccessRate }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>합계</th>
              <td></td>
              <td></td>
              <td></td>
              <td>( {{ grid.firmwareUpdataTotal.androidOverallRatio }} )</td>
              <td>( {{ grid.firmwareUpdataTotal.androidSuccessRate }} )</td>
              <td>( {{ grid.firmwareUpdataTotal.iosOverallRatio }} )</td>
              <td>( {{ grid.firmwareUpdataTotal.iosSuccessRate }} )</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </article>
    <!-- 콘서트 통계 -->
    <article aria-label="리스트 영역" class="grid mt-8">
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
      <div class="grid__wrap">
        <table class="grid__base">
          <colgroup>
            <col width="5%" />
            <col width="6%" />
            <col width="5%" />
            <col width="5%" />
            <col width="5%" />
            <col width="5%" />
            <col width="5%" />
            <col width="5%" />
            <col width="5%" />
            <col width="5%" />
            <col width="9%" />
            <col width="5%" />
            <col width="5%" />
            <col width="5%" />
            <col width="*" />
            <col width="10%" />
            <col width="5%" />
          </colgroup>
          <thead>
            <tr>
              <th>콘서트<br />회차</th>
              <th>공연일</th>
              <th>OS명</th>
              <th>OS버전</th>
              <th>제조사</th>
              <th>모델명</th>
              <th>앱버전</th>
              <th>앱언어</th>
              <th>앱지역</th>
              <th>응원도구</th>
              <th>응원도구 주소</th>
              <th>펌웨어<br />버전</th>
              <th>연동<br />성공여부</th>
              <th>오류코드</th>
              <th>오류내용</th>
              <th>일시</th>
              <th>회원ID</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="d in grid.errorCodeList"
              :key="`seat-mapping-list-${d.id}`"
            >
              <td>{{ d.round }}</td>
              <td>
                {{ d.concertDate }}
              </td>
              <td>{{ d.osNm }}</td>
              <td>{{ d.osVer }}</td>
              <td>{{ d.manufacturer }}</td>
              <td>{{ d.modelNm }}</td>
              <td>{{ d.appVer }}</td>
              <td>{{ d.appLanguage }}</td>
              <td>{{ d.appRegion }}</td>
              <td>{{ d.cheeringTool }}</td>
              <td>{{ d.cheeringToolAdd }}</td>
              <td>{{ d.firmwareVer }}</td>
              <td>{{ d.intrwFlnot }}</td>
              <td>{{ d.errorCode }}</td>
              <td>{{ d.errorCntnt }}</td>
              <td>{{ d.date }}</td>
              <td>{{ d.memberId }}</td>
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
  name: 'FirmwareUpdate',
  components: {
    GridPagination,
  },
  data() {
    return {
      search: {
        cheeringTool: '전체',
        cheeringToolList: ['전체', 'NCT V1', 'NCT V2'],
        os: '전체',
        osList: ['전체', 'Android', 'IOS'],
        language: '전체',
        languageList: ['전체', '한국어', '영어'],
        updateSuccessYn: '전체',
        updateSuccessYnList: ['전체', '성공(Y)', '실패(N)'],
        errorCode: '전체',
        errorCodeList: ['전체', '오류1', '오류2'],
        errorCntnt: '',
      },
      grid: {
        firmwareUpdataList: [
          {
            id: '1',
            cheeringToolNm: 'NCT V1',
            modelNmch: 'SME-NCT-OFL01',
            nmbrUpdts: '11,200',
            androidOverallRatio: '45.75%(5,100)',
            androidSuccessRate: '98%(5,000/100)',
            iosOverallRatio: '55.25%(6,100)',
            iosSuccessRate: '100%(6,100/0)',
          },
        ],
        firmwareUpdataTotal: [
          {
            androidOverallRatio: '',
            androidSuccessRate: '',
            iosOverallRatio: '',
            iosSuccessRate: '',
          },
        ],
        errorCodeList: [
          {
            round: '1',
            concertDate: '2021-12-17',
            osNm: 'iOS',
            osVer: '13',
            manufacturer: 'Apple',
            modelNm: 'iPhone12',
            appVer: '2.0.0',
            appLanguage: 'Ko',
            appRegion: 'Korea',
            cheeringTool: 'NCT V1',
            cheeringToolAdd: 'E9:F1:64:3A:8B:9C',
            firmwareVer: '20200425',
            intrwFlnot: 'Y',
            errorCode: '',
            errorCntnt: '',
            date: '2021-12-17 18:30:02',
            memberId: 'abc001',
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
    excelDownload() {},
    changePage(page) {
      // 페이지네이션
      this.grid.page.currentPage = page
    },
  },
}
</script>

<style lang="scss" scoped>
.grid {
  .form__label {
    width: 100%;
  }
}
</style>
