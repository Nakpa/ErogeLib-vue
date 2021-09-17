<script>

import DbHeader from '@/components/DbHeader.vue'
import DbFooter from '@/components/DbFooter.vue'

export default {
  name: 'GlobalLayout',
  data() {
    return {
      collapsed: false
    };
  },
  computed: {
  },
  methods: {
  },
  render() {
    const { $slots = {}, $route, collapsed, asideWidth } = this;
    console.log($slots , ' -------- render')
    return (
      <el-container style={{ width: 0 }}>
        <DbHeader></DbHeader>
        <section class="mainBg">
          {$slots.default}
        </section>
        <DbFooter class="dbfooter"></DbFooter>
      </el-container>
    );
  }
};

</script>

<style lang="less" scoped>
  section{
    background:url(../../static/image/main_bg.jpg);
  }
  .mainBg {
    position:absolute;
    top:50px;
    left:0;
    z-index: 0;
    width: 100%;
    height: calc(100vh - 70px);
    overflow-y: auto;
  }
  .dbfooter{
    position:absolute;
    bottom:0;
    left:0;
    z-index:10;
    background:url(../../static/image/nov_bg.png);
  }
</style>
