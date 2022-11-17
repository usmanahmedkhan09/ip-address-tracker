<template>
  <div class="container">
    <header class="search_container">
      <Search></Search>
      <IpInfo />
    </header>
    <main class="map_container">
      <Map />
    </main>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Search from "@/components/searchBar.vue";
import Map from "@/components/map.vue";
import IpInfo from "@/components/IpInfo.vue";

export default defineComponent({
  components: { Search, Map, IpInfo },
  setup() {
    return {};
  },
});
</script>
