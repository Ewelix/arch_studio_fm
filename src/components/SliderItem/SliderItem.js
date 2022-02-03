import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Wrapper, SectionContent } from './SliderItem.styles';
import LinkButton from '../LinkButton/LinkButton';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context('../../assets/sliderImages', false, /\.(png|jpe?g|svg)$/)
);

const SliderItem = ({ sliderItem: { id, title, description } }) => {
  return (
    <Wrapper>
      <img src={images[id - 1]} alt="Project photo" />
      <SectionContent>
        <h2>{title}</h2>
        <p>{description}</p>
        <LinkButton text="See Our Portfolio" to="/portfolio" />
      </SectionContent>
    </Wrapper>
  );
};

export default SliderItem;
