<template>
  <div class='formClass'>
    <PositionInput ref="Title" :inputval.sync="formData.title" inputlabel="Title" inputtype="text" :inputwidth="360"/>
    <PositionInput ref="Tags" :inputval.sync="formData.tagIdList" inputlabel="Tags" inputtype="tag" :inputwidth="360"/>

    <div id="editorSpace"></div>
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
      formData: {
        title: '',
        tagIdList: '',
        editor: null,
      },
    }
  },

  watch: {
  },

  mounted() {
    this.editor = new Editor('#editorSpace');
    this.editor.config.height = 330;
    this.editor.config.pasteIgnoreImg = true
    // 配置菜单栏，删减菜单，调整顺序
    this.editor.config.menus = [
      'head',
      'bold',
      'fontSize',
      'fontName',
      'italic',
      'underline',
      'strikeThrough',
      'indent',
      'lineHeight',
      'foreColor',
      'link',
      'justify',
      'quote',
      'emoticon',
      'image',
      'code',
      'splitLine',
      'undo',
      'redo',
    ]
    this.editor.create()
  },

  methods: {
    getFormData() {
      let xss = require("xss");
      let formData = {
        title: this.formData.title,
        tagIdList: this.formData.tagIdList,
        blogContent: xss(this.editor.txt.html()),
      };
      return formData;
    }
  },

  beforeDestroy() {
    // 销毁编辑器
    this.editor.destroy()
    this.editor = null
  }

}

</script>
<style scoped>

</style>
