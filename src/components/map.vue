<template>
  <div class="map_wrapper" id="mapid"></div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import leaflet from "leaflet";
// import "leaflet/dist/leaflet.css";
export default defineComponent({
  components: {},
  setup() {
    let mymap;

    onMounted(() => {
      mymap = leaflet.map("mapid").setView([42.5145, -83.0147], 9);
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
      console.log("herrerrererer", mymap);
    });

    // const getIpInfo = async () => {
    //   try {
    //     const data = await axios.get(
    //       `https://geo.ipify.org/api/v1?apiKey=at_FBTi0rGPhQlKp2cRdOJV0t3Mibq6F&ipAddress=${queryIp.value}`
    //     );
    //     const result = data.data;
    //     ipInfo.value = {
    //       address: result.ip,
    //       state: result.location.region,
    //       timezone: result.location.timezone,
    //       isp: result.isp,
    //       lat: result.location.lat,
    //       lng: result.location.lng,
    //     };
    //     leaflet.marker([ipInfo.value.lat, ipInfo.value.lng]).addTo(mymap);
    //     mymap.setView([ipInfo.value.lat, ipInfo.value.lng], 13);
    //   } catch (err) {
    //     alert(err.message);
    //   }
    // };

    return {};
  },
});
</script>
