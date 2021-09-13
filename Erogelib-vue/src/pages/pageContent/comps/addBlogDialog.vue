<template>
  <div class='formClass'>
    <PositionInput inputlabel="Title" inputtype="text" :inputwidth="360"/>
    <PositionInput inputlabel="Tags" inputtype="tag" :inputwidth="360"/>

    <div id="editorSpace">
    </div>
  </div>
</template>

<script>
import Editor from 'wangeditor'

export default {

  name: 'addBlogDialog',

  components: {
  },

  props: {
  },

  data: function () {
    return {
    }
  },

  watch: {
  },

  mounted() {
    const editor = new Editor('#editorSpace');
    editor.create()
  },

  methods: {
  }

}

</script>
<style scoped>

</style>
