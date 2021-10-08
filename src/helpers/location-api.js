

export const locationApi = async(ipAddress) => {

    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_GEOLOCATION_API_KEY}&ipAddress=${ipAddress}`;

    const data = await fetch(url);

    const dataInfo = await data.json();

    const {ip, isp, location} = dataInfo;

    if (location) {
        const {region, city, timezone, postalCode, lat, lng} = location;
        return {ip, region, city, timezone, postalCode, isp, lat, lng};
    } else {
        return 'This is not a valid IP Address';
    }

}