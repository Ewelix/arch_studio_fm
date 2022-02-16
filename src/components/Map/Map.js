import React from 'react';

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Element } from 'react-scroll';

import useCheckMobileScreen from '../../hooks/useCheckMobileScreen';
import MapMarker from '../MapMarker/MapMarker';
import { MapWrapper } from './Map.styles';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
  const checkMobileScreen = useCheckMobileScreen();

  return (
    <Element name="mapElement" className="mapElement">
      <MapWrapper>
        <MapContainer
          center={[33.30206, -90.750898]}
          zoom={checkMobileScreen ? 4 : 6}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapMarker position={[33.30206, -96.26248]} index={0} />
          <MapMarker position={[36.002951, -86.750898]} index={1} />
        </MapContainer>
      </MapWrapper>
    </Element>
  );
};

export default Map;
