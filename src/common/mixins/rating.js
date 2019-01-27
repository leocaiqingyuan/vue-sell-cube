const ALL = 2

export default {
  data() {
    return {
      selectType: ALL,
      onlyContent: true
    }
  },
  computed: {
    computedRatings() {
      let ret = []
      this.ratings.forEach((rating) => {
        // 只看有内容的评价，当rating.text没有内容，则过滤掉
        if (this.onlyContent && !rating.text) {
          return
        }
        // 选择类型为全部 或者 评论类型 === 选择类型
        if (this.selectType === ALL || rating.rateType === this.selectType) {
          ret.push(rating)
        }
      })
      return ret
    }
  },
  methods: {
    onSelect(type) {
      this.selectType = type
    },
    onToggle() {
      this.onlyContent = !this.onlyContent
    }
  }
}
