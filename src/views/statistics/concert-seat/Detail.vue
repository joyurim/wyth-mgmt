<template>
  <section aria-label="콘서트 좌석 매핑 통계 상세">
    <!-- 콘서트 정보 -->
    <article class="form__box border-top-none flex items-center">
      <label class="form__label font-medium">콘서트 정보</label>
      <div class="flex-1">
        <!-- id -->
        <div class="flex items-center">
          <!-- 콘서트 Id -->
          <div class="flex flex-1 pr-8">
            <label class="form__label">콘서트 ID</label>
            <div class="flex-1">
              <input
                v-model="form.concertInfo.id"
                type="text"
                readonly
                class="form__input"
              />
            </div>
          </div>
          <!-- 콘서트 관리 Id -->
          <div class="flex flex-1 pl-8">
            <label class="form__label">콘서트 관리 ID</label>
            <div class="flex-1">
              <input
                v-model="form.concertInfo.mgmtId"
                type="text"
                readonly
                class="form__input"
              />
            </div>
          </div>
        </div>
        <!-- 콘서트 명 -->
        <div class="flex items-center mt-2">
          <label class="form__label">콘서트 명</label>
          <div class="flex-1">
            <input
              v-model="form.concertInfo.concertNm"
              type="text"
              readonly
              class="form__input"
            />
          </div>
        </div>
        <!-- 콘서트 영문명 -->
        <div class="flex items-center mt-2">
          <label class="form__label">콘서트 영문명</label>
          <div class="flex-1">
            <input
              v-model="form.concertInfo.concertNmEng"
              type="text"
              readonly
              class="form__input"
            />
          </div>
        </div>
        <!-- 아티스트 명 -->
        <div class="flex items-center mt-2">
          <!-- 아티스트 명 -->
          <div class="flex flex-1 pr-8">
            <label class="form__label">아티스트 명</label>
            <div class="flex-1">
              <input
                v-model="form.concertInfo.artistNm"
                type="text"
                readonly
                class="form__input"
              />
            </div>
          </div>
          <!-- 아티스트 영문명 -->
          <div class="flex flex-1 pl-8">
            <label class="form__label">아티스트 영문명</label>
            <div class="flex-1">
              <input
                v-model="form.concertInfo.artistEngNm"
                type="text"
                readonly
                class="form__input"
              />
            </div>
          </div>
        </div>
        <!-- 공연일 -->
        <div class="flex items-center mt-2">
          <!-- 공연 시작일 -->
          <div class="flex flex-1 pr-8">
            <label class="form__label">공연 시작일</label>
            <div class="flex-1">
              <input
                v-model="form.concertInfo.startDate"
                type="text"
                readonly
                class="form__input"
              />
            </div>
          </div>
          <!-- 공연 종료일 -->
          <div class="flex flex-1 pl-8">
            <label class="form__label">공연 종료일</label>
            <div class="flex-1">
              <input
                v-model="form.concertInfo.endDate"
                type="text"
                readonly
                class="form__input"
              />
            </div>
          </div>
        </div>
        <!-- 공연장 -->
        <div class="flex items-center mt-2">
          <!-- 공연장 -->
          <div class="flex flex-1 pr-8">
            <label class="form__label">공연장</label>
            <div class="flex-1">
              <input
                v-model="form.concertInfo.concertHall"
                type="text"
                readonly
                class="form__input"
              />
            </div>
          </div>
          <!-- 공연장 영문명 -->
          <div class="flex flex-1 pl-8">
            <label class="form__label">공연장 영문명</label>
            <div class="flex-1">
              <input
                v-model="form.concertInfo.concertHallEng"
                type="text"
                readonly
                class="form__input"
              />
            </div>
          </div>
        </div>
        <!-- 노출여부 -->
        <div class="flex items-center mt-2">
          <label class="form__label">노출여부 </label>
          <div class="form__radio">
            <input
              id="concert-seat-exposureYn-n"
              v-model="form.concertInfo.exposureYn"
              type="radio"
              value="N"
              disabled
              class="radio--readonly"
            />
            <label for="concert-seat-exposureYn-n">비노출</label>
          </div>
          <div class="form__radio">
            <input
              id="concert-seat-exposureYn-y"
              v-model="form.concertInfo.exposureYn"
              type="radio"
              value="Y"
              disabled
              class="radio--readonly"
            />
            <label for="concert-seat-exposureYn-y">노출</label>
          </div>
        </div>
      </div>
    </article>
    <!-- 콘서트 통계 -->
    <article class="grid mt-8">
      <label class="form__label font-medium">콘서트 통계</label>
      <div class="grid__wrap">
        <table class="grid__base">
          <colgroup>
            <col width="6%" />
            <col width="9%" />
            <col width="7%" />
            <col width="7%" />
            <col width="6%" />
            <col width="17%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
            <col width="7%" />
            <col width="9%" />
            <col width="9%" />
          </colgroup>
          <thead>
            <tr>
              <th>콘서트 회차</th>
              <th>공연일</th>
              <th>전체 좌석수</th>
              <th>매칭 좌석수</th>
              <th>매칭율</th>
              <th>층별 매칭율</th>
              <th>한국어</th>
              <th>영어<br />(기타)</th>
              <th>일본어</th>
              <th>중국어</th>
              <th>Android 매칭율<br />(좌석수)</th>
              <th>IOS 매칭율<br />(좌석수)</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="c in grid.concertSeatList"
              :key="`concert-seat-list-${c.id}`"
            >
              <td>{{ c.round }}</td>
              <td>
                {{ c.concertDate }}
              </td>
              <td>{{ c.totalSeat }}</td>
              <td>
                {{ c.matchingSeat }}
              </td>
              <td>
                {{ c.matchingRate }}
              </td>
              <td>
                {{ c.matchingRateFloor }}
              </td>
              <td>
                {{ c.korean }}
              </td>
              <td>
                {{ c.english }}
              </td>
              <td>
                {{ c.japanese }}
              </td>
              <td>
                {{ c.chinese }}
              </td>
              <td>
                {{ c.android }}
              </td>
              <td>
                {{ c.ios }}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>합계</th>
              <td></td>
              <td>( {{ grid.concertSeatTotal.totalSeat }} )</td>
              <td>( {{ grid.concertSeatTotal.matchingSeat }} )</td>
              <td>( {{ grid.concertSeatTotal.matchingRate }} )</td>
              <td>( {{ grid.concertSeatTotal.matchingRateFloor }} )</td>
              <td>( {{ grid.concertSeatTotal.korean }} )</td>
              <td>( {{ grid.concertSeatTotal.english }} )</td>
              <td>( {{ grid.concertSeatTotal.japanese }} )</td>
              <td>( {{ grid.concertSeatTotal.chinese }} )</td>
              <td>( {{ grid.concertSeatTotal.android }} )</td>
              <td>( {{ grid.concertSeatTotal.ios }} )</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </article>
    <!-- 좌석 매핑 로그 -->
    <article class="form__box flex items-center mt-16">
      <label class="form__label font-medium">좌석 매핑 로그</label>
      <div class="flex-1">
        <div class="flex flex-wrap items-center">
          <!-- 콘서트 회차 -->
          <div class="flex items-center my-1">
            <label class="form__label">콘서트 회차</label>
            <div class="w-28">
              <v-select
                v-model="form.seatLogInfo.round"
                :options="form.seatLogInfo.roundList"
                label="name"
                :searchable="false"
              />
            </div>
          </div>
          <!-- 응원도구 -->
          <div class="flex items-center my-1 px-4">
            <label class="form__label">응원도구</label>
            <div class="w-28">
              <v-select
                v-model="form.seatLogInfo.cheeringTool"
                :options="form.seatLogInfo.cheeringToolList"
                label="name"
                :searchable="false"
              />
            </div>
          </div>
          <!-- OS -->
          <div class="flex items-center my-1 px-4">
            <label class="form__label">OS</label>
            <div class="w-28">
              <v-select
                v-model="form.seatLogInfo.os"
                :options="form.seatLogInfo.osList"
                label="name"
                :searchable="false"
              />
            </div>
          </div>
          <!-- 언어 -->
          <div class="flex items-center my-1 pr-4">
            <label class="form__label">언어</label>
            <div class="w-28">
              <v-select
                v-model="form.seatLogInfo.language"
                :options="form.seatLogInfo.languageList"
                label="name"
                :searchable="false"
              />
            </div>
          </div>
          <!-- 연동 실패여부 -->
          <div class="flex items-center my-1">
            <label class="form__label">연동 실패여부</label>
            <div class="w-28">
              <v-select
                v-model="form.seatLogInfo.intrwFlnot"
                :options="form.seatLogInfo.intrwFlnotList"
                label="name"
                :searchable="false"
              />
            </div>
          </div>
        </div>
        <div class="flex items-center mt-2">
          <!-- Floor -->
          <div class="flex items-center">
            <label class="form__label">Floor</label>
            <div class="w-28">
              <v-select
                v-model="form.seatLogInfo.floor"
                :options="form.seatLogInfo.floorList"
                label="name"
                :searchable="false"
              />
            </div>
          </div>
          <!-- Zone -->
          <div class="flex items-center px-4">
            <label class="form__label">Zone</label>
            <div class="w-28">
              <v-select
                v-model="form.seatLogInfo.zone"
                :options="form.seatLogInfo.zoneList"
                label="name"
                :searchable="false"
              />
            </div>
          </div>
          <!-- Row -->
          <div class="flex items-center px-4">
            <label class="form__label">Row</label>
            <div class="w-28">
              <v-select
                v-model="form.seatLogInfo.row"
                :options="form.seatLogInfo.rowList"
                label="name"
                :searchable="false"
              />
            </div>
          </div>
          <!-- Col -->
          <div class="flex items-center pr-4">
            <label class="form__label">Col</label>
            <div class="w-28">
              <v-select
                v-model="form.seatLogInfo.col"
                :options="form.seatLogInfo.colList"
                label="name"
                :searchable="false"
              />
            </div>
          </div>
          <button class="btn__search" @click="inquiry">검색</button>
        </div>
      </div>
    </article>
    <!-- 콘서트 통계 -->
    <article class="grid mt-8">
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
            <col width="5%" />
            <col width="5%" />
            <col width="5%" />
            <col width="5%" />
            <col width="5%" />
            <col width="9%" />
            <col width="10%" />
            <col width="5%" />
          </colgroup>
          <thead>
            <tr>
              <th>콘서트<br />회차</th>
              <th>공연일</th>
              <th>Floor</th>
              <th>Zone</th>
              <th>Block</th>
              <th>Rpw</th>
              <th>Col</th>
              <th>OS명</th>
              <th>OS버전</th>
              <th>제조사</th>
              <th>모델명</th>
              <th>앱버전</th>
              <th>앱언어</th>
              <th>앱지역</th>
              <th>응원도구</th>
              <th>응원도구 주소</th>
              <th>일시</th>
              <th>회원ID</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="d in grid.seatMappingList"
              :key="`seat-mapping-list-${d.id}`"
            >
              <td>{{ d.round }}</td>
              <td>
                {{ d.concertDate }}
              </td>
              <td>{{ d.floor }}</td>
              <td>{{ d.zone }}</td>
              <td>{{ d.block }}</td>
              <td>{{ d.row }}</td>
              <td>{{ d.col }}</td>
              <td>{{ d.osNm }}</td>
              <td>{{ d.osVer }}</td>
              <td>{{ d.manufacturer }}</td>
              <td>{{ d.modelNm }}</td>
              <td>{{ d.appVer }}</td>
              <td>{{ d.appLanguage }}</td>
              <td>{{ d.appRegion }}</td>
              <td>{{ d.cheeringTool }}</td>
              <td>{{ d.cheeringToolAdd }}</td>
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
  name: 'ConcertSeatMappingDetail',
  components: {
    GridPagination,
  },
  data() {
    return {
      form: {
        concertInfo: {
          id: '31',
          mgmtId: '42452',
          concertNm: 'NCT 127 2ND TOUR ‘NEO CITY : SEOUL - THE LINK’',
          concertNmEng: 'NCT 127 2ND TOUR ‘NEO CITY : SEOUL - THE LINK’',
          artistNm: 'NCT 127',
          artistEngNm: 'NCT 127',
          startDate: '2021-12-17',
          endDate: '2021-12-19',
          concertHall: '고척 스카이돔',
          concertHallEng: 'GOCHEOK SKY DOME',
          exposureYn: 'N',
        },
        seatLogInfo: {
          round: '1',
          roundList: ['1', '2', '3'],
          cheeringTool: '전체',
          cheeringToolList: ['전체', 'NCT V1', 'NCT V2'],
          os: '전체',
          osList: ['전체', 'Android', 'IOS'],
          language: '전체',
          languageList: ['전체', '한국어', '영어'],
          intrwFlnot: '전체',
          intrwFlnotList: ['전체', '성공(Y)', '실패(N)'],
          floor: '전체',
          floorList: ['전체', '1', '2'],
          zone: '전체',
          zoneList: ['전체', '1', '2'],
          row: '전체',
          rowList: ['전체', '1', '2', '3', '4', '5', '6'],
          col: '전체',
          colList: ['전체', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        },
      },
      grid: {
        concertSeatList: [
          {
            round: '1',
            concertDate: '2021-12-17',
            totalSeat: '12,000',
            matchingSeat: '11,200',
            matchingRate: '93.33%',
            matchingRateFloor:
              'Floor(3,000) : 10%(300) 2(5,000): 20%(1,000) 3(3,000) : 30%(900)',
            korean: '8,990',
            english: '1,200',
            japanese: '0,000',
            chinese: '0,000',
            android: '45.75%(5,100)',
            ios: '55.25%(6,100)',
          },
        ],
        concertSeatTotal: {
          totalSeat: '',
          matchingSeat: '',
          matchingRate: '',
          matchingRateFloor: '',
          korean: '',
          english: '',
          japanese: '',
          chinese: '',
          android: '',
          ios: '',
        },
        seatMappingList: [
          {
            round: '1',
            concertDate: '2021-12-17',
            floor: '1',
            zone: '1',
            block: '-',
            row: '12',
            col: '8',
            osNm: 'iOS',
            osVer: '13',
            manufacturer: 'Apple',
            modelNm: 'iPhone12',
            appVer: '2.0.0',
            appLanguage: 'Ko',
            appRegion: 'Korea',
            cheeringTool: 'NCT V1',
            cheeringToolAdd: 'E9:F1:64:3A:8B:9C',
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
.form__box {
  padding: 10px;
  border-top: 1px solid $gray-20;

  &.border-top-none {
    border-top: none;
  }
  &.concert-seat {
    .form__label {
      padding-right: 10px;
      min-width: 80px;
      max-width: 100px;
      &.font-medium {
        min-width: 120px;
      }
    }
  }
}

.grid {
  .form__label {
    width: 100%;
  }
  &__countbox {
    .search-form {
      margin-bottom: 0;
      > div {
        margin-bottom: 0;
      }
    }
  }
}
</style>
