<template>
  <div class="container">
    <div class="search_container">
      <h1 class="title">IP Address Tracker</h1>
      <Search></Search>
    </div>
    <div class="map_container"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Search from "@/components/searchBar.vue";

export default defineComponent({
  components: { Search },
  setup() {
    return {};
  },
});
</script>
