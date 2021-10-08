import React, { useContext } from 'react';
import { IpAddressContext } from '../context/IpAddressContext';

export const Textbox = () => {

    const {geoLocation} = useContext(IpAddressContext);
    
    const {ip, region, city, postalCode, timezone, isp} = geoLocation;


    return (

        (geoLocation === 'This is not a valid IP Address')
        
        ?

        (
            <div id="text-box">
                <h2>Error</h2>
                <p>This is not a valid IP Address</p>
            </div>
        )

        :

        (
            <div id="text-box">

                <div>
                    <h2>Ip Address</h2>
                    <p>{ip}</p>
                </div>

                <div>
                    <h2>Location</h2>
                    <p>{`${region}, ${city} ${postalCode}`}</p>
                </div>

                <div>
                    <h2>Timezone</h2>
                    <p>UTC {timezone}</p>
                </div>

                <div>
                    <h2>ISP</h2>
                    <p>{isp}</p>
                </div>

            </div>
        )

    )
}
