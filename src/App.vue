<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
  </div>
</template>

<script>
import vHeader from './components/v-header/v-header'
import { getSeller } from 'api'

export default {
  name: 'app',
  components: {
    vHeader
  },
  data() {
    return {
      seller: {}
    }
  },
  created () {
    this._getSeller()
  },
  methods: {
    _getSeller () {
      getSeller().then((seller) => {
        this.seller = seller
      })
    }
  }
}
</script>
<style lang="stylus">

</style>
