<template>
  <div class="search-form">
    <div class="flex-1">
      <div class="w-24">
        <vue-select
          v-model="selectbox1"
          :options="options"
          :label="'name'"
          :searchable="false"
          class="form__select"
        />
      </div>
      <input
        type="text"
        class="form__input"
        placeholder="검색어를 입력해 주세요."
      />
    </div>
    <button class="btn__search" @click="inquiry">조회</button>
  </div>
</template>

<script>
export default {
  name: 'ConcertMgmt',
  data() {
    return {
      options: [
        {
          name: '사과',
          code: 'apple',
        },
        {
          name: '레몬',
          code: 'lemon',
        },
        {
          name: '키위',
          code: 'kiwi',
        },
      ],
      selectbox1: {
        name: '레몬',
        code: 'lemon',
      },
    }
  },
  methods: {
    inquiry() {
      // 조회
    },
  },
}
</script>

<style lang="scss" scoped></style>
