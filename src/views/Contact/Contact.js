import React from 'react';

import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import {
  MapContainer,
  TileLayer,
  Polyline,
  Polygon,
  Rectangle,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import ContactList from '../../components/ContactList/ContactList';
import Form from '../../components/Form/Form';
import IntroSection from '../../components/IntroSection/IntroSection';
import { Wrapper } from '../../components/MainTemplate/MainTemplate.styles';
import MapMarker from '../../components/MapMarker/MapMarker';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { pageTextContent } from '../../data/pageTextContent';
import { SectionWrapper, MapWrapper } from './Contact.styles';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Contact = () => {
  const {
    intro: { contact },
  } = pageTextContent;

  return (
    <Wrapper>
      <IntroSection {...contact} type="contact" />
      <SectionWrapper>
        <SectionTitle title={`Contact \n Details`} />
        <ContactList />
      </SectionWrapper>
      <MapWrapper>
        <MapContainer center={[33.30206, -86.750898]} zoom={5}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapMarker position={[33.30206, -96.26248]} index={0} />
          <MapMarker position={[36.002951, -86.750898]} index={1} />
        </MapContainer>
      </MapWrapper>
      <Form />
    </Wrapper>
  );
};

export default Contact;
