<template>
  <header>
    <div class="top-logo-wrapper">
      <img alt="Vue logo" class="site-logo" src="../assets/logo.png" />
      <div>{{ msg }} {{ msg2 }} {{ headerTitle }}</div>
    </div>
    <ul class="top-nav">
      <li>
        <router-link class="nav-link" active-class="active" to="/"
          >Home</router-link
        >
      </li>
      <li>
        <router-link class="nav-link" active-class="active" to="/about"
          >About</router-link
        >
      </li>
      <li>
        <router-link
          class="nav-link"
          active-class="active"
          to="/composition-api"
          >Composition API</router-link
        >
      </li>
    </ul>
  </header>
</template>

<script>
import AppSettings from "../common/AppSettings";

export default {
  name: "Header",
  props: {
    msg: String,
    msg2: String,
  },
  data() {
    return {
      headerTitle: AppSettings.siteTitle,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  margin-bottom: 40px;
}
.top-logo-wrapper {
  margin: 40px 0;
}
.top-logo-wrapper img.site-logo {
  width: 80px;
}
ul.top-nav {
  display: flex;
  padding-left: 0;
}
ul.top-nav > li {
  display: block;
  flex: 1;
}
ul.top-nav > li > a.nav-link {
  color: blue;
  text-decoration: unset;
}
ul.top-nav > li > a.nav-link.active {
  color: aqua;
}
</style>