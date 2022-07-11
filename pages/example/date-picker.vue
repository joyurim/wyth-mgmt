<template>
  <div>
    <date-picker
        v-model="startDate"
        value-type="format"
        :lang="lang"
        :clearable="false"
        placeholder="시작일"
        :disabled-date="disabledStartRange"
    ></date-picker>
  </div>
</template>

<script>
import datePicker from 'vue2-datepicker'
export default {
  name: 'DatePicker',
  components: {datePicker},
  data() {
    return {
      startDate: '',
      endDate: '',
      lang: {
        days: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
        yearFormat: 'YYYY년',
        formatLocale: {
          firstDayOfWeek: 0
        }
      }
    };
  },
  methods: {
    disabledStartRange(date) {
      return date < new Date();
    }
  }
};
</script>

<style lang="scss" scoped></style>
