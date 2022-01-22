<template>
  <Header msg="Hey!" :msg2="msg2" />
  <div class="content-body">
    <div v-show="routerLoading">Loading...</div>
    <router-view v-show="!routerLoading"></router-view>
  </div>
  <Footer :footerText="footerText" />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

import router from "./router/router";
import AppSettings from "./common/AppSettings";

export default {
  name: "App",
  data: () => {
    return {
      routerLoading: false,
      footerText: AppSettings.siteTitle,
      msg2: "Yo!",
    };
  },
  components: {
    Header,
    Footer,
  },
  mounted() {
    //console.log("app vue > mounted", router, this);

    // show/hide loading state change while lazy-loading the routes
    router.beforeEach(() => {
      this.$data.routerLoading = true;
    });
    router.afterEach(() => {
      this.$data.routerLoading = false;
    });
  },
  methods: {
    toggleLoading() {
      //console.log(this.$data.routerLoading);
      //this.$data.routerLoading = !this.$data.routerLoading;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
div.content-body {
  min-height: 300px;
  background-color: floralwhite;
  padding: 8px;
}
</style>
