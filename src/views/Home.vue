<template>
  <div>
    <div>This is home page.</div>
    <button @click="addOneBox">+ Add One</button>
    <button @click="removeLastBox">- Remove Last</button>
    <br />
    <b>({{ boxes.length }}) ({{ myComputedVal }})</b>
    <div class="outer">
      <div class="inner" v-for="box in boxes" :key="box.id">{{ box.text }}</div>
    </div>
  </div>
</template>

<script>
import { setTitle } from "../common/utility";

export default {
  name: "Home",
  data() {
    // static data here
    return {
      howMany: 9,
      boxes: [],
    };
  },
  beforeMount() {
    // some pre-operations here
    for (let i = 0; i < this.$data.howMany; i++)
      this.$data.boxes.push({ id: i, text: "text-" + i });
  },
  mounted() {
    // after mount (like "effect" after everything is done)
    console.log("Home page mounted");
    setTitle(null);
  },
  unmounted() {
    console.log("Home page unmounted");
  },
  methods: {
    // methods here
    addOneBox() {
      this.$data.boxes.push({
        id: this.$data.boxes.length,
        text: "text-" + this.$data.boxes.length,
      });
    },
    removeLastBox() {
      this.$data.boxes.pop();
    },
  },
  computed: {
    myComputedVal() {
      return Math.pow(this.$data.boxes.length, 2) - 2;
    },
  },
};
</script>

<style scoped>
div.outer {
  overflow: hidden;
  margin-top: 30px;
}
div.inner {
  float: left;
  width: 33.33333%;
  height: 50px;
  padding: 4px;
  box-sizing: border-box;
}
</style>