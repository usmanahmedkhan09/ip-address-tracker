<template>
  <div class="map_wrapper" id="mapid"></div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import leaflet from "leaflet";
import { useIpAddressTracker } from "@/composable/ip-address-tracker";
export default defineComponent({
  components: {},
  setup() {
    let mymap;

    const {} = useIpAddressTracker();

    onMounted(() => {
      mymap = leaflet.map("mapid").setView([51.505, -0.09], 13);
      leaflet
        .tileLayer(
          "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidXNtYW5haG1lZGtoYW4wOSIsImEiOiJjbGFqY3owOGMwODE5M3dud2QzZGR4dGV2In0.O_7M3lX_ZvcjaEBDkwx9KQ",
          {
            attribution:
              'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: "mapbox/streets-v11",
            tileSize: 512,
            zoomOffset: -1,
            accessToken:
              "pk.eyJ1IjoidXNtYW5haG1lZGtoYW4wOSIsImEiOiJjbGFqY3owOGMwODE5M3dud2QzZGR4dGV2In0.O_7M3lX_ZvcjaEBDkwx9KQ",
          }
        )
        .addTo(mymap);
    });

    return {};
  },
});
</script>
