import React from 'react';
import { pageTextContent } from '../../../data/pageTextContent';
import LeadersList from '../LeadersList/LeadersList';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { SectionWrapper, SectionContainer } from './About.styles';
import { Wrapper } from '../../MainTemplate/MainTemplate.styles';
import heritageImg from './../../../assets/desktop/image-heritage.jpg';

import IntroSection from '../../IntroSection/IntroSection';

const About = () => {
  const { intro: { about } } = pageTextContent;
  return (
    <Wrapper>
      <IntroSection {...about } type="about"/>
      <div>
        <SectionWrapper>
          <SectionContainer>
            <SectionTitle title={`Our \n Heritage`} />
            <p>
              Founded in 2007, we started as a trio of architects. Our
              complimentary skills and relentless attention to detail turned Arch
              into one of the most sought after boutique firms in the country.
            </p>
            <p>
              Speciliazing in Urban Design allowed us to focus on creating
              exceptional structures that live in harmony with their surroundings.
              We consider every detail from every surrounding element to inform
              our designs.
            </p>
            <p>
              Our small team of world-class professionals provides input on every
              project.
            </p>
          </SectionContainer>
          {/* jesli mobile */}
          <img className="heritage-img" src={heritageImg} alt=""/>
        </SectionWrapper>
      </div>
      <SectionWrapper>
        <LeadersList />
      </SectionWrapper>
    </Wrapper>
  );
};

export default About;
