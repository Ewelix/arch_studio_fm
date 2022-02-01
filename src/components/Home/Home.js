import React from 'react';
import { Wrapper } from '../../Root/Root.styles';
import Welcome from '../Welcome/Welcome';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomePortfolio from '../HomePortfolio/HomePortfolio';

const Home = () => {
  return (
    <Wrapper>
      <Welcome/>
      <HomeAbout/>
      <HomePortfolio/>
    </Wrapper>
  )
};

export default Home;
