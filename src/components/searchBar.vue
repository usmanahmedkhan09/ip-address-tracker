<template>
  <div class="search_wrapper">
    <input
      v-model="ipAddress"
      placeholder="Search for any IP address or domain"
      type="text"
      name="ip-tracker-search"
      id="ip-tracker-search"
    />
    <div class="icon_wrapper">
      <icon_arrowVue @click="getIpAddressInfo()"></icon_arrowVue>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import icon_arrowVue from "./icons/icon_arrow.vue";
import { useIpAddressTracker } from "@/composable/ip-address-tracker";

export default defineComponent({
  components: { icon_arrowVue },
  setup() {
    const { ipAddress, getIpAddressInfo } = useIpAddressTracker();
    return {
      ipAddress,
      getIpAddressInfo,
    };
  },
});
</script>
