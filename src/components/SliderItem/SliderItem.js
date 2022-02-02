import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Wrapper } from './SliderItem.styles';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../../assets/sliderImages', false, /\.(png|jpe?g|svg)$/));

const SliderItem = ({sliderItem : {id, title, description}}) => {
  return (
    <Wrapper>
      <img src={images[id - 1]} alt='Project photo' />
      <div>
        <span>{title}</span>
        <span>{description}</span>
      </div>
      <h3>0{id}</h3>
    </Wrapper>
  );
};

export default SliderItem;