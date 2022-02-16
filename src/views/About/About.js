import React from 'react';

import heritageImg from '../../assets/desktop/image-heritage.jpg';
import IntroSection from '../../components/IntroSection/IntroSection';
import LeadersList from '../../components/LeadersList/LeadersList';
import { Wrapper } from '../../components/MainTemplate/MainTemplate.styles';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { pageTextContent } from '../../data/pageTextContent';
import { SectionWrapper, SectionContainer } from './About.styles';

const About = () => {
  const {
    intro: { about },
  } = pageTextContent;
  return (
    <Wrapper>
      <IntroSection {...about} type="about" />
      <div>
        <SectionWrapper>
          <SectionContainer>
            <SectionTitle title={`Our \n Heritage`} />
            <p>
              Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of
              the most sought after boutique firms in the country.
            </p>
            <p>
              Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We
              consider every detail from every surrounding element to inform our designs.
            </p>
            <p>Our small team of world-class professionals provides input on every project.</p>
          </SectionContainer>
          {/* jesli mobile */}
          <img className="heritage-img" src={heritageImg} alt="" />
        </SectionWrapper>
      </div>
      <LeadersList />
    </Wrapper>
  );
};

export default About;
