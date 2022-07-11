<script>
export default {
  data() {
    return {
      isModify: false,
    }
  },
  computed: {
    mode() {
      const paramsMode = this.$route.params.mode
      let status = 'read'
      if (paramsMode === 'create') {
        status = 'create'
      } else if (this.isModify) {
        status = 'modify'
      }
      return status
    },
    pageTitle() {
      let statusText = '상세';
      if (this.mode === 'read') {
        return `${this.pageName} ${statusText}`;
      }
      if (this.mode === 'create') {
        statusText = '등록';
      } else if (this.mode === 'modify') {
        statusText = '변경';
      }

      return `${this.pageName} ${statusText}`;
    }
  },
  methods: {
    // toggleMode() {
    //   this.isModify = !this.isModify
    // },
    // setModifyMode(flag) {
    //   this.isModify = flag
    // },
  },
}
</script>
