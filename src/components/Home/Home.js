import React from 'react';
import { Wrapper } from '../../Root/Root.styles';
import Welcome from '../Welcome/Welcome';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomePortfolio from '../HomePortfolio/HomePortfolio';
import Slider from '../Slider/Slider';

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
