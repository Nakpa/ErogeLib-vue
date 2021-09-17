<template>
  <div class=''>
    <b>{{blogData.blogTitle}}</b>
    <hr />
    <div v-html="blogData.blogContent"></div>
  </div>
</template>

<script>

export default {

  name: 'blogDialog',

  components: {
  },

  props: {
    blogData: {
      type: Object,
      default: () => {}
    },
    editType: {
      type: String,
      default: 'detail',
    }
  },

  data: function () {
    return {
    }
  },

  watch: {
  },

  methods: {
  }

}

</script>
<style scoped>

</style>
