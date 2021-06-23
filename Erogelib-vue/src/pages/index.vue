<template>
  <div>
    <db-header></db-header>
    <pageContent @scroll="scrollCatch" style="height: calc(100vh - 72px)"/>
    <db-footer></db-footer>
  </div>
</template>

<script>
import DbHeader from '@/components/DbHeader.vue'
import DbFooter from '@/components/DbFooter.vue'
import pageContent from '@p/pageContent'

import { debounce } from '@/utils/common.js'

export default {

  components: {
    DbHeader,
    DbFooter,
    pageContent
  },

  props: {
  },

  data: function () {
    return {
      imageUrl: '',
      timer: null,
    }
  },

  watch: {
  },

  created () {
    window.addEventListener('scroll', this.scrollCatch);
  },

  destroyed () {
    window.removeEventListener('scroll', this.scrollCatch);
  },

  methods: {

    // 滚动触发方法
    scrollCatch:debounce(event => {
      console.log(event, ' >>> is scrolling >>> ')
    } , 300),
  }

}

</script>
<style scoped>
</style>
