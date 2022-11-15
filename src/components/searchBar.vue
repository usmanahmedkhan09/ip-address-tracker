<template>
  <div class="search_wrapper">
    <input
      placeholder="Search for any IP address or domain"
      type="text"
      name="ip-tracker-search"
      id="ip-tracker-search"
    />
    <div class="icon_wrapper">
      <icon_arrowVue></icon_arrowVue>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import icon_arrowVue from "./icons/icon_arrow.vue";

export default defineComponent({
  components: { icon_arrowVue },
  setup() {
    return {};
  },
});
</script>
