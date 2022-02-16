import React from 'react';

import ContactList from '../../components/ContactList/ContactList';
import Form from '../../components/Form/Form';
import IntroSection from '../../components/IntroSection/IntroSection';
import { Wrapper } from '../../components/MainTemplate/MainTemplate.styles';
import Map from '../../components/Map/Map';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { pageTextContent } from '../../data/pageTextContent';
import { SectionWrapper } from './Contact.styles';

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
      <Map />
      <Form />
    </Wrapper>
  );
};

export default Contact;
