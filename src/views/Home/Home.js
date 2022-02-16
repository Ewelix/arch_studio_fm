import React from 'react';

import HomeAbout from '../../components/HomeAbout/HomeAbout';
import HomePortfolio from '../../components/HomePortfolio/HomePortfolio';
import { Wrapper } from '../../components/MainTemplate/MainTemplate.styles';
import Slider from '../../components/Slider/Slider';
import Welcome from '../../components/Welcome/Welcome';

const Home = () => {
  return (
    <Wrapper>
      <Slider />
      <Welcome />
      <HomeAbout />
      <HomePortfolio />
    </Wrapper>
  );
};

export default Home;
