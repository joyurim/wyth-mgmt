<script>
export default {
  data() {
    return {
      isModify: false,
    }
  },
  computed: {
    mode() {
      const paramsId = this.$route.params.id
      let status = 'read'
      if (paramsId === 'create') {
        status = 'create'
      } else if (this.isModify) {
        status = 'modify'
      }
      return status
    },
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
