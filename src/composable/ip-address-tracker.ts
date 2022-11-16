import { ref } from 'vue'
import axios from "axios";

const ipAddress = ref('')

const ipAddressInfo = ref<any>(null)

export const useIpAddressTracker = () =>
{
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
            // leaflet.marker([ipInfo.value.lat, ipInfo.value.lng]).addTo(mymap);
            // mymap.setView([ipInfo.value.lat, ipInfo.value.lng], 13);
        } catch (err)
        {
            // alert(err.message);
        }
    };

    return {
        ipAddress,
        ipAddressInfo,
        getIpAddressInfo
    }
}