<template>
  <div>This is About Us page.</div>
</template>

<script>
import { setTitle } from "../common/utility";

export default {
  name: "About",
  mounted: () => {
    console.log("mounted");
    setTitle("About Us");
  }
};
</script>

<style>
</style>