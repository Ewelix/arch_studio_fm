import React from 'react';
import { pageTextContent } from '../../../data/pageTextContent';
import LeadersList from '../LeadersList/LeadersList';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { ImageWrapper, SectionWrapper, SectionContainer } from './About.styles';
import { Wrapper } from '../../../Root/Root.styles';
import heroImgM from './../../../assets/mobile/image-hero.jpg';
import heritageImg from './../../../assets/desktop/image-heritage.jpg';

const About = () => {
  const { leadersList } = pageTextContent;
  return (
    <Wrapper>
      <ImageWrapper>
        <img className="hero-img" src={heroImgM} alt='' />
      </ImageWrapper>
      <SectionWrapper>
        <SectionTitle title="Your team of professionals" />
        <p>
          Our small team of world-class professionals will work with you every
          step of the way. Strong relationships are at the core of everything we
          do. This extends to the relationship our projects have with their
          surroundings.
        </p>
      </SectionWrapper>
      <div>
        <SectionWrapper>
          <SectionContainer>
            <SectionTitle title="Our Heritage" />
            <p>
              Founded in 2007, we started as a trio of architects. Our
              complimentary skills and relentless attention to detail turned Arch
              into one of the most sought after boutique firms in the country.
            </p>
            <p>
              Speciliazing in Urban Design allowed us to focus on creating
              exceptional structures that live in harmony with their surroundings.
              We consider every detail from every surrounding element to inform
              our designs.{' '}
            </p>
            <p>
              Our small team of world-class professionals provides input on every
              project.
            </p>
          </SectionContainer>
          {/* jesli mobile */}
          <img src={heritageImg} alt=""/>
        </SectionWrapper>
      </div>
      <SectionWrapper>
        <LeadersList />
      </SectionWrapper>
    </Wrapper>
  );
};

export default About;
