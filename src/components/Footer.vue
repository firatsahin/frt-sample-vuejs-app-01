<template>
  <footer>{{ footerText }} &copy; {{ new Date().getFullYear() }}</footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    footerText: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  padding: 8px;
}
</style>