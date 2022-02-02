import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Wrapper } from './Welcome.styles';
import PageTitle from '../PageTitle/PageTitle';
import img from '../../assets/desktop/image-welcome.jpg';
import { SectionContainer } from '../AboutTab/About/About.styles';

const Welcome = () => {
  return (
    <Wrapper>
      <PageTitle title="Welcome"/>
      <SectionContainer>
        <SectionTitle title="Welcome to Arch Studio" />
        <p>
          We have a unique network and skillset to help bring your projects to
          life. Our small team of highly skilled individuals combined with our
          large network put us in a strong position to deliver exceptional
          results.
        </p>
        <p>
          Over the past 10 years, we have worked on all kinds of projects. From
          stations to high-rise buildings, we create spaces that inspire and
          delight.
        </p>
        <p>
          We work closely with our clients so that we understand the intricacies
          of each project. This allows us to work in harmony the surrounding area
          to create truly stunning projects that will stand the test of time.
        </p>
      </SectionContainer>
      {/* if desktop */}
      <img
        className="welcome-img"
        src={img}
        alt=""
      />
    </Wrapper>
  );
};

export default Welcome;
