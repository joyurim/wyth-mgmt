<template>
  <div class="flex items-center justify-center">
    <div v-if="totalCount > limit" class="w-40 pagi__select">
      <v-select
        v-model="limit"
        :options="limitList"
        label="codeNm"
        :reduce="(limit) => limit.codeVal"
        :searchable="false"
        @input="changePage(0)"
      />
    </div>
    <client-only>
      <vue-ads-pagination
        :total-items="totalCount"
        :page="currentPage"
        :items-per-page="Number(limit)"
      >
        <template slot-scope="props">
          <div class="hidden">{{ props }}</div>
        </template>

        <template slot="buttons" slot-scope="props">
          <vue-ads-page-button
            v-for="(button, key) in props.buttons"
            :key="key"
            class="btn--pagination my-2"
            v-bind="button"
            @page-change="changePage(button.page)"
          />
        </template>
      </vue-ads-pagination>
    </client-only>
  </div>
</template>

<script>
import 'vue-ads-pagination/dist/vue-ads-pagination.css'
import VueAdsPagination, { VueAdsPageButton } from 'vue-ads-pagination'

export default {
  name: 'GridPagination',
  components: {
    VueAdsPagination,
    VueAdsPageButton,
  },
  props: {
    totalCount: {
      type: [Number, String],
      default: 0,
    },
    currentPage: {
      type: [Number, String],
      default: 1,
    },
    perPage: {
      type: [Number, String],
      default: 15,
    },
  },
  data() {
    return {
      limit: '10', // 페이지 사이즈
      limitList: [
        {
          code: '10ROW',
          codeNm: '10개씩 보기',
          codeVal: '10',
        },
        {
          code: '30ROW',
          codeNm: '30개씩 보기',
          codeVal: '30',
        },
        {
          code: '100ROW',
          codeNm: '100개씩 보기',
          codeVal: '100',
        },
      ],
    }
  },
  methods: {
    changePage(page) {
      this.$emit('changePage', page, this.limit)
    },
  },
}
</script>

<style lang="scss">
.pagi__select {
  .v-select {
    .vs__dropdown-toggle {
      height: 30px;
      .vs__selected-options {
        height: 30px; //select 높이만큼 수정
      }
    }
  }
}
// 페이지네이션
.vue-ads-flex-grow {
  &.vue-ads-flex {
    &.vue-ads-justify-end {
      align-items: center;
      justify-content: center;
    }
  }

  .vue-ads-m-2 {
    margin: 0;
  }

  .btn--pagination {
    width: auto;
    min-width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: 1px solid $gray-20;
    font-size: 12px;
    font-weight: normal;
    // color: $white-40;
    background: transparent;

    &:hover {
      background: transparent;
    }

    &.mini_ver {
      width: 22px;
      min-width: 22px;
      height: 22px;
      padding: 0 !important;
      margin-left: 1px;
    }

    &.vue-ads-bg-teal-500 {
      background: $primary-1;
      > span {
        color: $white;
      }
    }
    > span {
      > i.fa-angle-right {
        &::before {
          content: '';
          display: inline-block;
          width: 9px;
          height: 9px;
          background: url('@/assets/img/icon__arrow-left.png') no-repeat center
            center / 9px;
          transform: rotate(180deg);
        }
      }
      > i.fa-angle-left {
        &::before {
          content: '';
          display: inline-block;
          width: 9px;
          height: 9px;
          background: url('@/assets/img/icon__arrow-left.png') no-repeat center
            center / 9px;
        }
      }
      > i.fa-angle-double-right {
        &::before {
          content: '';
          display: inline-block;
          width: 9px;
          height: 9px;
          background: url('@/assets/img/icon__arrow-double-left.png') no-repeat
            center center / 9px;
          transform: rotate(180deg);
        }
      }
      > i.fa-angle-double-left {
        &::before {
          content: '';
          display: inline-block;
          width: 9px;
          height: 9px;
          background: url('@/assets/img/icon__arrow-double-left.png') no-repeat
            center center / 9px;
        }
      }
    }
  }
}
</style>
