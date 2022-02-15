import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import { pageTextContent } from '../../data/pageTextContent';
import { Marker, Popup } from 'react-leaflet';

const MapMarker = ({position, index}) => {
  const { contactDetails } = pageTextContent;
  return (
    <Marker position={position} index={index}>
      <Popup>
        <ContactListItem userData={contactDetails[index]}/>
      </Popup>
    </Marker>
  );
};

export default MapMarker;