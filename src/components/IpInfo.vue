<template>
  <div class="ipInfo" v-if="ipAddressInfo">
    <div class="section">
      <p>IP ADDRESS</p>
      <h2>{{ ipAddressInfo.address }}</h2>
    </div>
    <hr />
    <div class="section">
      <p>LOCATION</p>
      <h2>{{ ipAddressInfo.state }}</h2>
    </div>
    <hr />
    <div class="section">
      <p>TIMEZONE</p>
      <h2>UTC {{ ipAddressInfo.timezone }}</h2>
    </div>
    <hr />
    <div class="section">
      <p>ISP</p>
      <h2>{{ ipAddressInfo.isp }}</h2>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useIpAddressTracker } from "@/composable/ip-address-tracker";

export default defineComponent({
  setup() {
    const { ipAddressInfo } = useIpAddressTracker();

    return {
      ipAddressInfo,
    };
  },
});
</script>
