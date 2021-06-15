<script>
// import { mapActions } from 'vuex';
import GlobalLayout from './GlobalLayout';
import RouterView from './RouterView';

export default {
  name: 'BasicLayout',

  watch: {
  },

  mounted() {},

  methods: {
  },

  render() {
    return (
      <GlobalLayout>
        <transition name="page-transition" mode="out-in">
          <RouterView />
        </transition>
      </GlobalLayout>
    );
  },

}

</script>
<style scoped>
.page-transition-enter-active {
  transition: all 0.3s ease-in;
}
.page-transition-leave-active {
  transition: all 0.3s ease-out;
}
.page-transition-enter,
.page-transition-leave-to {
  opacity: 0;
}
</style>
