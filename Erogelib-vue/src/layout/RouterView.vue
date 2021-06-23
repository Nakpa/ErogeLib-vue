<script>
import { mapState } from 'vuex';

export default {
  name: 'RouteView',
  computed: {
    ...mapState('app', ['keepAliveNames']),
    isKeepAlive() {
      const { meta = {} } = this.$route;
      return !!meta.keepAlive;
    },
    // cachedNames() {
    //   return ['RouteView', ...this.keepAliveNames.map(x => x.value)];
    // },
    key() {
      return this.$route.fullPath;
    }
  },
  render() {
    const { cachedNames, isKeepAlive, key } = this;
    return (
      <keep-alive>
        <router-view />
      </keep-alive>
    );
  }
};
</script>
