<template>
  <div class="map_wrapper" id="mapid"></div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

import { useIpAddressTracker } from "@/composable/ip-address-tracker";
export default defineComponent({
  components: {},
  setup() {
    const { getClientIp, setInitialData, getIpAddressInfo } =
      useIpAddressTracker();

    onMounted(() => {
      getClientIp();
      setInitialData();
      getIpAddressInfo();
    });

    return {};
  },
});
</script>
