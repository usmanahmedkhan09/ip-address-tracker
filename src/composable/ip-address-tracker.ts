import { ref, onMounted, onUnmounted } from 'vue'
import axios from "axios";
import leaflet from "leaflet";



const url = 'http://ipinfo.io/json'

const ipAddress = ref('')

const ipAddressInfo = ref<any>(null)


export const useIpAddressTracker = () =>
{
    let mymap: any;


    const getIpAddressInfo = async () =>
    {
        try
        {
            const data = await axios.get(
                `https://geo.ipify.org/api/v1?apiKey=at_fQprP1KriEZhw7K5DYnLN2pcNZLKc&ipAddress=${ipAddress.value}`
            );
            const result = data.data;
            ipAddressInfo.value = {
                address: result.ip,
                state: result.location.region,
                timezone: result.location.timezone,
                isp: result.isp,
                lat: result.location.lat,
                lng: result.location.lng,
            };
            leaflet.marker([ipAddressInfo.value.lat, ipAddressInfo.value.lng]).addTo(mymap);
            mymap.setView([ipAddressInfo.value.lat, ipAddressInfo.value.lng], 13);
        } catch (err: any)
        {
            alert(err.message);
        }
    };

    const getClientIp = () =>
    {
        axios.get("https://ipinfo.io?token=bd25531dad364b").then(response =>
        {
            ipAddress.value = response.data.ip
        })
    }

    const setInitialData = () =>
    {
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
    }
    onMounted(() =>
    {
        // getClientIp()
        // setInitialData()
        // getIpAddressInfo()

    });

    onUnmounted(() =>
    {
        mymap.invalidateSize();
    })

    return {
        mymap,
        ipAddress,
        ipAddressInfo,
        getIpAddressInfo
    }
}