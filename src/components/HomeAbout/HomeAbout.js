import React from 'react';

import LinkButton from '../LinkButton/LinkButton';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Wrapper, SectionContainer, SectionContent } from './HomeAbout.styles';

const HomeAbout = () => {
  return (
    <Wrapper>
      <SectionContainer>
        <SectionContent>
          <SectionTitle title={`Small team, \n big ideas`} />
          <LinkButton text="About Us" to="/about" />
        </SectionContent>
      </SectionContainer>
    </Wrapper>
  );
};

export default HomeAbout;
