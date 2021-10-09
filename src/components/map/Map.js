import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';


const getIcon = (size) => {
    return L.icon(
        {
            iconUrl: require('../../assets/icon-location.svg'),
            iconSize: [size]
        }
    )
}

const LocationMarker = ({latLng}) => {
    const map = useMap();
    map.setView(latLng, map.getZoom())

  
    return latLng === null ? null : (
      <Marker 
        position={latLng}
        icon={getIcon(46)}
      >
      </Marker>
    )
  }
  

export const Map = ({lat = 43.73414415941826, lng = 7.416179362673161}) => {

    const position = [lat, lng]


    return (
        <MapContainer center={position} zoom={100} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker latLng={position} />
        </MapContainer>
    
    )
}
