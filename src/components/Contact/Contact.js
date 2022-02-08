import React from 'react';
import { Wrapper } from '../MainTemplate/MainTemplate.styles';
import IntroSection from '../IntroSection/IntroSection';
import { pageTextContent } from '../../data/pageTextContent';
import SectionTitle from '../SectionTitle/SectionTitle';
import { SectionWrapper } from './Contact.styles';
import ContactList from '../ContactList/ContactList';
import Form from '../Form/Form';

import mapImgS from './../../assets/mobile/image-map.png';
import mapImgM from './../../assets/tablet/image-map.png';
import mapImgL from './../../assets/desktop/image-map.png';

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
        <img
          className="map-img"
          src={mapImgS}
          srcSet={`${mapImgS} 300w, ${mapImgM} 768w, ${mapImgL} 1100w`}
          alt=""
        />
      </SectionWrapper>
      <Form/>
    </Wrapper>
  );
};

export default Contact;
