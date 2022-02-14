import React from 'react';
import { Wrapper } from '../../components/MainTemplate/MainTemplate.styles';
import Welcome from '../../components/Welcome/Welcome';
import HomeAbout from '../../components/HomeAbout/HomeAbout';
import HomePortfolio from '../../components/HomePortfolio/HomePortfolio';
import Slider from '../../components/Slider/Slider';

const Home = () => {
  return (
    <Wrapper>
      <Slider/>
      <Welcome/>
      <HomeAbout/>
      <HomePortfolio/>
    </Wrapper>
  )
};

export default Home;
