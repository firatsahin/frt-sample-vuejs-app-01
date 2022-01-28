<template>
  <div>
    Testing Vue 3 Composition API usage here. (Prop val: {{ testProp }})
  </div>
  <h3>My Items ({{ itemsCount }})</h3>
  <table class="my-table">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Actions</th>
    </tr>
    <tr v-for="item in items" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td><button @click="remove(item)">Remove -</button></td>
    </tr>
  </table>
  <input
    type="number"
    v-model="howMany"
    min="1"
    ref="howManyTextbox"
    style="width: 100px"
  />
  <button @click="add()" style="width: 100px">Add +</button>
  <div>How Many to Add: {{ howMany }}</div>
</template>

<script>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { setTitle } from "../common/utility";

export default {
  name: "CompositionApi",
  props: {
    testProp: Number,
  },
  setup(/*props*/) {
    let id = ref(1001);
    let howMany = ref(1);
    const howManyTextbox = ref();
    const items = ref([]);
    const add = (howManyParam) => {
      if (!howMany.value || howMany.value < 1) howMany.value = 1;
      const howManyToAdd = howManyParam ? howManyParam : howMany.value;
      for (let i = 0; i < howManyToAdd; i++) {
        items.value.push({
          id: id.value,
          name: "item" + id.value,
        });
        id.value++;
      }
    };
    add(10);
    function remove(item) {
      const indexToRemove = items.value.findIndex((o) => o.id === item.id);
      items.value.splice(indexToRemove, 1);
    }
    const itemsCount = computed({
      get: () => items.value.length, // computed property example
    });
    onMounted(() => {
      console.log("Composition API page mounted");
      howManyTextbox.value.focus(); // focus to textbox after mounted
      setTitle("Composition API Test");
    });
    onUnmounted(() => console.log("Composition API page unmounted"));
    return { items, add, howMany, remove, howManyTextbox, itemsCount };
  },
};
</script>

<style scoped>
table.my-table {
  width: 100%;
}
</style>