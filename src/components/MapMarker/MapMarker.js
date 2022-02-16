import React from 'react';

import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { Marker, Popup } from 'react-leaflet';

import { pageTextContent } from '../../data/pageTextContent';
import ContactListItem from '../ContactListItem/ContactListItem';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapMarker = ({ position, index }) => {
  const { contactDetails } = pageTextContent;
  return (
    <Marker position={position} index={index}>
      <Popup>
        <ContactListItem userData={contactDetails[index]} />
      </Popup>
    </Marker>
  );
};

export default MapMarker;
