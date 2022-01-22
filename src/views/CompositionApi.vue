<template>
  <div>Testing Vue 3 Composition API here.</div>
</template>

<script>
import { setTitle } from "../common/utility";

export default {
  name: "CompositionApi",
  mounted: () => {
    console.log("mounted");
    setTitle("Composition API Test");
  },
};
</script>

<style>
</style>