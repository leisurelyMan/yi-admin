<template>
  <div :class="classObj" class="app-wrapper">
    <!-- <div
      v-if="device === 'mobile' && sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    /> -->
    <div class="header">
      <div class="show-logo">
        <img :src="logoIcon" class="sidebar-logo" />
      </div>
      <div class="sidebar-user">
        <span>欢迎发行人</span>
        <span @click="logout" class="border-r">退出</span>
      </div>
    </div>
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div :class="{ 'fixed-header': fixedHeader }">
        <navbar />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from "./components";
import ResizeMixin from "./mixin/ResizeHandler";
import logoIcon from "@/assets/404_images/logo.png";
export default {
  name: "Layout",
  components: {
    Navbar,
    Sidebar,
    AppMain,
  },
  mixins: [ResizeMixin],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar;
    },
    device() {
      return this.$store.state.app.device;
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader;
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === "mobile",
      };
    },
  },
  data() {
    return {
      logoIcon,
    };
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch("app/closeSideBar", { withoutAnimation: false });
    },
    async logout() {
      await this.$store.dispatch("user/logout");
      console.log(111);
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
  .header {
    width: 100%;
    display: flex;
    height: 50px;
    background: linear-gradient(#fff, #f0f0f0);
    justify-content: space-between;
    box-sizing: border-box;
    padding-right: 20px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    .show-logo {
      width: 360px;
      vertical-align: middle;
      .sidebar-logo {
        cursor: pointer;
      }
    }
    .show-logo img {
      // width: 100%;
      height: 50px;
    }
    .sidebar-user {
      line-height: 50px;
      font-size: 14px;
      text-align: right;
    }
    .border-r {
      margin-left: 10px;
      padding-left: 10px;
      border-left: 1px solid #333;
      cursor: pointer;
    }
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>
