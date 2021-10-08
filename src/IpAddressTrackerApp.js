import React, { useState } from 'react';
import { IpAddressContext } from './components/context/IpAddressContext';
import { Input } from './components/input/Input';
import { Map } from './components/map/Map';
import { Textbox } from './components/textbox/Textbox';
import './styles.css';

export const IpAddressTrackerApp = () => {

    const [geoLocation, setGeoLocation] = useState({
        
        ip: '192.212.174.101',
        region: 'Brooklyn',
        city: 'NY',
        postalCode: '10001',
        timezone: '-05:00',
        isp: 'SpaceX Starlink',
        lat: 43.73414415941826,
        lng: 7.416179362673161

    });
    

    return (
        <IpAddressContext.Provider value={{geoLocation, setGeoLocation}}>
            <Input />
            <Textbox />
            <Map lat={geoLocation.lat} lng={geoLocation.lng} />
        </IpAddressContext.Provider>
    )
}
